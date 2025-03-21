import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000", // Ubah jika menggunakan proxy
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // Jangan tambahkan token untuk login dan register
    const publicEndpoints = ["/api/users/login", "/api/users/register"];
    if (publicEndpoints.includes(config.url)) return config;

    const token = localStorage.getItem("authToken");
    if (token && token !== "undefined") {
      // Kirim token tanpa prefix "Bearer"
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Jika respons 401 (Unauthorized), langsung redirect ke login
    if (error.response?.status === 401) {
      // window.location.href = "/login";
      // return Promise.reject(error);
    }
    if (error.code === "ERR_NETWORK") {
      console.error("Network Error:", error);
      throw new Error("Network Error.");
    }
    return Promise.reject(error);
  }
);

export const secureRequest = async (method, url, data = null) => {
  try {
    const response = await apiClient({ method, url, data });
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    if (error.response) {
      console.error("Server Error:", error.response.data);
      throw new Error(
        error.response.data.message || "Terjadi kesalahan server"
      );
    } else if (error.request) {
      console.error("No Response:", error.request);
      throw new Error("Server tidak merespons");
    } else {
      console.error("Request Error:", error.message);
      throw new Error("Terjadi kesalahan dalam pengaturan request");
    }
  }
};

export default apiClient;

import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const publicEndpoints = ["/api/users/login", "/api/users/register"];
    if (publicEndpoints.includes(config.url)) return config;

    const token = localStorage.getItem("authToken");
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (userData?.id && userData?.role) {
      config.headers["X-User-ID"] = userData.id;
      config.headers["X-User-Role"] = userData.role;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("/api/users/refresh-token", {
          refreshToken,
        });

        localStorage.setItem("authToken", response.data.newToken);
        originalRequest.headers.Authorization = `Bearer ${response.data.newToken}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        // logout();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
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
    const response = await apiClient({
      method: method,
      url: url,
      data: data,
    });

    return sanitizeResponse(response.data);
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

const sanitizeResponse = (data) => {
  return JSON.parse(JSON.stringify(data));
};

const handleApiError = (error) => {
  if (error.response) {
    console.error("Server Error:", error.response.data);
    throw new Error(error.response.data.message || "Terjadi kesalahan server");
  } else if (error.request) {
    console.error("No Response:", error.request);
    throw new Error("Server tidak merespons");
  } else {
    console.error("Request Error:", error.message);
    throw new Error("Terjadi kesalahan dalam pengaturan request");
  }
};

export default apiClient;

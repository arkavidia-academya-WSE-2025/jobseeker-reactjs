import axios from "axios";

// Konfigurasi dasar
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor Request
apiClient.interceptors.request.use(
  (config) => {
    // Jangan tambahkan header untuk endpoint publik
    const publicEndpoints = ["/api/users/login", "/api/users/register"];
    if (publicEndpoints.includes(config.url)) return config;

    const token = localStorage.getItem("authToken");
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Hanya tambahkan header jika token valid
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Validasi data user sebelum tambahkan header
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

// Interceptor Response
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle token expired (401 Unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Lakukan refresh token
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("/api/users/refresh-token", {
          refreshToken,
        });

        localStorage.setItem("authToken", response.data.newToken);
        originalRequest.headers.Authorization = `Bearer ${response.data.newToken}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        // Jika refresh token gagal, lakukan logout
        // logout();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    // Handle network error
    if (error.code === "ERR_NETWORK") {
      console.error("Network Error:", error);
      throw new Error("Terjadi masalah koneksi. Periksa jaringan Anda.");
    }

    return Promise.reject(error);
  }
);

// Helper untuk request aman
export const secureRequest = async (method, url, data = null) => {
  try {
    const response = await apiClient({
      method: method,
      url: url,
      data: data,
    });

    // Sanitasi respons sebelum diproses
    return sanitizeResponse(response.data);
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Sanitasi data respons
const sanitizeResponse = (data) => {
  // Implementasi sanitasi sesuai kebutuhan
  return JSON.parse(JSON.stringify(data));
};

// Error handling terpusat
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

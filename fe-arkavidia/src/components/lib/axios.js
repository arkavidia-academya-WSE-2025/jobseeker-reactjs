import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 1000,
});

export const fetchData = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default apiClient;

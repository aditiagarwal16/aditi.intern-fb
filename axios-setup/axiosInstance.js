
import axios from "axios";

// Simple helper to generate a random request ID
function generateRequestId() {
  return Math.random().toString(36).slice(2);
}

// AbortController lets us cancel requests if needed
export const controller = new AbortController();

// Create a reusable Axios instance for all API requests
const api = axios.create({
  baseURL: "https://example.com/api", // placeholder base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    Accept: "*/*",
  },
  signal: controller.signal,
});

// Add a request interceptor to attach token + request ID
api.interceptors.request.use(
  (config) => {
    // Add a unique request ID so the backend can trace requests
    config.headers["X-Request-ID"] = generateRequestId();

    // Read token from localStorage (if the user is logged in)
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Simple example POST request to test the setup
export async function testPostRequest() {
  try {
    const payload = {
      message: "Testing Axios setup",
      time: Date.now(),
    };

    const res = await api.post("/test-endpoint", payload);

    console.log("Response:", res.data);

    // Optional redirect if the API sends a redirect URL
    if (res.data && res.data.redirectUrl) {
      window.location.href = res.data.redirectUrl;
    }
  } catch (err) {
    if (err.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    console.error("API request failed:", err);
  }
}

export default api;

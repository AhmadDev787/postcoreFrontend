import axios from "axios";
if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
  throw new Error("Backend Url is missing in env");
}

const apiReq = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ---- 2. Request Interceptor ----
apiReq.interceptors.request.use(
  (config) => {
    // Adding extra security headers
    config.headers["X-Requested-With"] = "XMLHttpRequest";

    // Adding request timestamp
    config.headers["X-Request-Time"] = Date.now().toString();

    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// ---- 3. Response Interceptor ----
apiReq.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error?.response?.status;

    // ---- Handling common API errors globally ----
    if (status === 500) {
      console.error("Internal server error");
    }
    if (status === 404) {
      console.warn("API route not found");
    }
    if (status === 429) {
      console.warn("Rate limit exceeded");
    }

    // Network error (backend offline, DNS issue)
    if (!error.response) {
      console.error("Network/connection error");
    }

    return Promise.reject(error);
  }
);

export default apiReq;

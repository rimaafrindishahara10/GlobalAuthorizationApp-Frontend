import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8081/api/v1",
    headers:{
        "Content-Type ": "application/json",
        
    },
    withCredentials: true, // Include cookies in requests
    timeout: 10000, // Set a timeout for requests (in milliseconds)

});
export default apiClient;
import axios from "axios";
import useAuth from "../auth/store";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8081/api/v1",
    headers:{
        "Content-Type": "application/json",
        
    },
    withCredentials: true, // Include cookies in requests
    timeout: 10000, // Set a timeout for requests (in milliseconds)
});

//using interceptors for adding access token to every request
apiClient.interceptors.request.use((config) => {
    const accessToken = useAuth.getState().accessToken
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
});

export default apiClient;

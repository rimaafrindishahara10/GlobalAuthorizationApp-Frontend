import axios from "axios";
import useAuth from "../auth/store";
import { refreshToken } from "../services/AuthServices";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8081/api/v1",
    headers:{
        "Content-Type": "application/json",
    },
    withCredentials: true, 
    timeout: 10000, 
});

// using interceptors for adding access token to every request
apiClient.interceptors.request.use((config) => {
    const accessToken = useAuth.getState().accessToken;
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

let isRefreshing = false;
let pending: ((token: string) => void)[] = [];

function queueRequest(cb: (token: string) => void) {
    pending.push(cb);
}

function resolvedQueue(newToken: string) {
    pending.forEach((cb) => cb(newToken));
    pending = [];
}


apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const original = error.config;
        const is401 = error.response?.status === 401;

        if (!is401 || original._retry) {
            return Promise.reject(error);
        }

       //If a token refresh is already in progress, we will queue the incoming requests.
        if (isRefreshing) {
            return new Promise((resolve, reject) => {
                queueRequest((token: string) => {
                    if (!token || token === 'null') {
                        return reject(error);
                    }
                    original.headers.Authorization = `Bearer ${token}`;
                    resolve(apiClient(original));
                });
            });
        }
        //Set _retry to true here to prevent an infinite loop.
        original._retry = true;
        //Start the token refresh process
        isRefreshing = true;

        try {
            console.log("Start Refreshing..........");
            const loginResponse = await refreshToken();
            const newToken = loginResponse.accessToken;
            
            if (!newToken) throw new Error("No received access token from loginresponse data");
            
            useAuth.getState().changeLocalLoginData(loginResponse.accessToken, loginResponse.userDto, true);
            
            isRefreshing = false;
            resolvedQueue(newToken);

            original.headers.Authorization = `Bearer ${newToken}`;
            return apiClient(original);

        } catch (refreshError) {
            isRefreshing = false;
            resolvedQueue('null');
            useAuth.getState().logout();
            return Promise.reject(refreshError);
        }
    }
);

export default apiClient;
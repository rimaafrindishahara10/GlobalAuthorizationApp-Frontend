import type RegisterData from "../models/RegisterData";
import type LoginData from "../models/LogingData";
import apiClient from "../config/ApiClient";


//Register user function to call the API for user registration
export const registerUser = async (signupData: RegisterData) => {
    //call api to register user
    const response = await apiClient.post(`/auth/register`, signupData);
    return response.data;
}

//Login user function to call the API for user login
export const loginUser = async (loginData:LoginData) => {
    //call api to login user
    const response = await apiClient.post(`/auth/login`, loginData);
    return response.data;
}


//Access token function to call the API for getting access token

//Refresh token function to call the API for refreshing the access token
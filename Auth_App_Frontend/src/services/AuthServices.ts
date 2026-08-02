import type RegisterData from "../models/RegisterData";
import apiClient from "../config/ApiClient";


//Register user function to call the API for user registration
export const registerUser = async (signupData: RegisterData) => {
    //call api to register user
    const response = await apiClient.post(`/auth/register`, signupData);
    return response.data;
}

//Login user function to call the API for user login
//Access token function to call the API for getting access token

//Refresh token function to call the API for refreshing the access token
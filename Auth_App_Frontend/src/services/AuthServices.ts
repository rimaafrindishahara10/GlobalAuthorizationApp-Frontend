import type RegisterData from "../models/RegisterData";
import type LoginData from "../models/LogingData";
import apiClient from "../config/ApiClient";
import type LoginResponseData from "../models/LoginResponseData";
import type User from "../models/User";


//Register user function to call the API for user registration
export const registerUser = async (signupData: RegisterData) => {
    //call api to register user
    const response = await apiClient.post(`/auth/register`, signupData);
    return response.data;
}

//Login user function to call the API for user login
export const loginUser = async (loginData:LoginData) => {
    //call api to login user
    const response = await apiClient.post<LoginResponseData>(`/auth/login`, loginData);
    return response.data;
}

//Logout user fun to call the API for user logout
export const logoutUser = async ()=>{
   const response = await apiClient.post(`/auth/logout`);
   return response.data;
}

//Get Curent user to call API
export const getCurrentUser= async(emailId:string | undefined) =>{
  const response= await apiClient.get<User>(`/users/email/${emailId}`);
  return response.data;
}
//Access token function to call the API for getting access token

//Refresh token function to call the API for refreshing the access token
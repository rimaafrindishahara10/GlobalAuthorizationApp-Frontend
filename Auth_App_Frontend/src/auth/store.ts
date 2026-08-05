import { create } from 'zustand';
import type User from '../models/User';
import type LoginData from '../models/LogingData';
import { loginUser, logoutUser } from '../services/AuthServices';
import type LoginResponseData from '../models/LoginResponseData';
import { persist } from 'zustand/middleware'

const LOCAL_KEY = 'app_auth';


//Global_AuthState
type AuthState = {
  
    accessToken: string | null;
    user: User | null;
    authStatus : boolean;
    authLoading : boolean;
    login :(loginData: LoginData)=> Promise<LoginResponseData>;
    logout:(silent ?: boolean)=> void;
    checkIsLoggedIn: () => boolean | undefined;

};

const useAuth = create<AuthState>()(
    persist(
(set,get) => ({
    accessToken: null,
    user: null,
    authStatus: false,
    authLoading: false,
    login: async (loginData) => {
        console.log("started loging function");
        set({ authLoading: true});
        try{
            const loginResponse = await loginUser(loginData);
            console.log("login response", loginResponse); 
            set({
                accessToken: loginResponse.accessToken,
                user: loginResponse.userDto,
                authStatus: true,
                
            })
            return loginResponse;
        }catch(error){
            console.error("Login error:", error);
            throw error;
        }finally{
            set({ authLoading: false});
        }
         
    },
    logout: async (silent =false) => {
        try{
            set({authLoading : true})
            if(!silent){
                await logoutUser();
            }

        }catch(error){
            console.error("Login error:", error);
            throw error;
        }
        finally{
            set({authLoading : false})
        }
        set({
            accessToken : null,
            authStatus : false,
            authLoading : false,
            user: null,
            

        })
    } ,
    checkIsLoggedIn: () => {
        if(get().accessToken && get().authStatus){
            return true;
        }
        return false;
        
    }



}),
{name : LOCAL_KEY}
),
);
export default useAuth;
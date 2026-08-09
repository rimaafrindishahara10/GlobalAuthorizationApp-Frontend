import React, { useState } from "react";
import { Mail, Lock, ArrowRight, Shield, AlertCircleIcon } from "lucide-react";
import type LoginData from "../models/LogingData";
import { toast } from "react-hot-toast";
import { loginUser } from "../services/AuthServices";
import { useNavigate } from "react-router";
import { Alert, AlertTitle } from "../components/ui/alert";
import { Spinner } from "../components/ui/spinner";
import useAuth from "../auth/store";
import OAuth2Buttons from "../components/ui/OAuth2Buttons";

export default function LoginPage() {
  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
  });
  // Initialize the useNavigate hook for navigation
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const login = useAuth((state) => state.login);

  //Define the handleInputChange function to update the state based on input changes
  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  //Define the handleSubmit function to handle form submission
  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    if (data.email.trim() === "") {
      toast.error("Email is required.");
      setIsLoading(false);
      return;
    }
    if (data.password.trim() === "") {
      toast.error("Password is required.");
      setIsLoading(false);
      return;
    }

    //call to server or API to authenticate user credentials:
    try {
      //const loginUserResult = await loginUser(data);

      //Login: Use the useAuth store to call the login function and pass the login data
      const loginUserResult = await login(data);
      navigate("/dashboard"); // Navigate to the dashboard page after successful login
      console.log("Login successful:", loginUserResult);
      toast.success("Login successful!");

      // Store user info and token in local storage

      // Simulate API request
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage =
          error.response.data.message ||
          error.response.data.error ||
          "An error occurred. Please try again later.";
        setError(errorMessage);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen mb-10 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 font-sans flex flex-col justify-center items-center px-6 relative selection:bg-zinc-950 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950">
      {/* Background Ambient Glow (Futuristic touch) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      {/* --- LOGIN CONTAINER --- */}
      <div className="w-full max-w-md relative z-10">
        {/* Brand Logo / Icon Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center shadow-lg mb-4">
            <Shield className="w-6 h-6 stroke-[2]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
            Welcome Back
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-1">
            Enter your credentials to access your secure portal.
          </p>
        </div>

        <div>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircleIcon className="w-4 h-4 mr-2" />
              <AlertTitle className="text-sm">{error}</AlertTitle>
            </Alert>
          )}
        </div>

        {/* Card Frame */}
        <div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={data.email}
                  name="email"
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Password
                </label>
                <a
                  href="#forgot"
                  className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  name="password"
                  value={data.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Spinner />
                  <span>Please wait...</span>
                </>
              ) : (
                <>
                  Sign In <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-zinc-900 px-3 text-zinc-500 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Auth Buttons */}
          <OAuth2Buttons />
        </div>

        {/* Footer text link for signup */}
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-6">
          Don't have an account?{" "}
          <a
            href="#signup"
            className="font-medium text-zinc-900 dark:text-white hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

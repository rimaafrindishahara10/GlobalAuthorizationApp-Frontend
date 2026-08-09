import React, { useState } from "react";
import { User, Mail, Lock, ArrowRight, Shield } from "lucide-react";
import toast from "react-hot-toast";
import type RegisterData from "../models/RegisterData";
import { registerUser } from "../services/AuthServices";
import { useNavigate } from "react-router";
import { Alert } from "../components/ui/alert";
import { Spinner } from "../components/ui/spinner";
import OAuth2Buttons from "../components/ui/OAuth2Buttons";

export default function SignupPage() {
  const [data, setData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  // Define the handleInputChange function to update the state based on input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  // Define the handleSubmit function to handle form submission
  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    console.log("Submitting data:", data);

    //validate the input fields
    if (data.name.trim() === "") {
      toast.error("Name is required");
      setIsLoading(false);
      return;
    }
    if (data.email.trim() === "") {
      toast.error("Email is required");
      setIsLoading(false);
      return;
    }
    if (data.password.trim() === "") {
      toast.error("Password is required");
      setIsLoading(false);
      return;
    }

    // Simulate API request
    try {
      const response = await registerUser(data);
      console.log("API Response:", response);
      toast.success("Registration successful!");
      setData({
        name: "",
        email: "",
        password: "",
      });
      //navigate to login page after successful registration
      navigate("/login");
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        setError("An error occurred. Please try again later.");
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen mb-10 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 font-sans flex flex-col justify-center items-center px-6 relative selection:bg-zinc-950 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      {/* --- SIGNUP CONTAINER --- */}
      <div className="w-full max-w-md relative z-10">
        {/* Brand Logo / Icon Header */}
        <div className="flex flex-col items-center mb-8 mt-5">
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center shadow-lg mb-4">
            <Shield className="w-6 h-6 stroke-[2]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
            Create an Account
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-1">
            Enter your details to register your secure identity.
          </p>
        </div>

        <div className="flex justify-center items-center">
          {error && (
            <Alert variant="destructive" className="mb-4">
              {error}
            </Alert>
          )}
        </div>
        {/* Card Frame */}
        <div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Full Name
              </label>
              <div className="relative">
                <User className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={data.name}
                  onChange={handleInputChange}
                  name="name"
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={data.email}
                  onChange={handleInputChange}
                  name="email"
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={data.password}
                  onChange={handleInputChange}
                  name="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 mt-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Spinner />
                  <span>Please wait...</span>
                </>
              ) : (
                <>
                  Create Account <ArrowRight className="w-4 h-4" />
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

        {/* Footer text link for signin */}
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-6">
          Already have an account?{" "}
          <a
            href="#login"
            className="font-medium text-zinc-900 dark:text-white hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

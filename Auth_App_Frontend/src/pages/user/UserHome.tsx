import React, { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../auth/store";
import type User from "../../models/User";
import { getCurrentUser } from "../../services/AuthServices";

function UserHome() {
  const [user1, setUser1] = useState<User | null>(null);
  const user = useAuth((state) => state.user);
  const getUserData = async () => {
    try {
      const user1 = await getCurrentUser(user?.email);
      setUser1(user1);
    } catch (error) {
      console.log(error);
      toast("Getting error during get the user");
    }
  };

  return (
    <main className="flex-1 px-8 py-8 max-w-7xl w-full mx-auto bg-[#0f0f0f] text-white min-h-screen">
      <h1 className="text-3xl font-bold tracking-tight mb-8">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#181818] border border-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 text-gray-400 mb-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-sm font-medium">Total Logins</span>
          </div>
          <div className="text-3xl font-bold text-white">1,245</div>
        </div>

        <div className="bg-[#181818] border border-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 text-gray-400 mb-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-sm font-medium">Security Score</span>
          </div>
          <div className="text-3xl font-bold text-white">98%</div>
        </div>

        <div className="bg-[#181818] border border-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 text-gray-400 mb-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-sm font-medium">Active Sessions</span>
          </div>
          <div className="text-3xl font-bold text-white">12</div>
        </div>
      </div>

      <div className="bg-[#181818] border border-gray-800 rounded-xl p-6 mb-10 shadow-sm">
        <div className="flex items-center space-x-2 text-gray-300 font-medium mb-6">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span>Recent Activity</span>
        </div>
        <ul className="space-y-4 text-gray-300 text-sm">
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            <span>Logged in from Chrome (Windows)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            <span>Password updated</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            <span>New device added to trusted list</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            <span>Logged out from Safari (iPhone)</span>
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <button
          onClick={getUserData}
          className="bg-[#212121] hover:bg-[#313131] text-white font-medium px-6 py-2.5 rounded-full border border-gray-700 transition shadow-sm"
        >
          Get Current User
        </button>
        <span>{user1?.name}</span>
      </div>
    </main>
  );
}

export default UserHome;

import React, { useEffect, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import useAuth from "../../auth/store";

type UserProfileForm = {
  name: string;
  email: string;
  provider: string;
  enable: boolean;
};

function UserProfile() {
  const user = useAuth((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfileForm>({
    name: "",
    email: "",
    provider: "LOCAL",
    enable: true,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        provider: user.provider || "LOCAL",
        enable: user.enable ?? true,
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <main className="flex-1 px-8 py-8 max-w-4xl w-full mx-auto bg-[#0f0f0f] text-white min-h-screen">
      <h1 className="text-3xl font-bold tracking-tight text-center mb-8">
        User Profile
      </h1>

      <div className="bg-[#181818] border border-gray-800 rounded-xl p-8 mb-8 shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Profile Information</h2>

        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-20 h-20 mb-4 border border-gray-700">
            <AvatarImage src={user?.imageUrl} alt={formData.name || "User"} />
            <AvatarFallback className="bg-orange-600 text-white flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 10h.01M15 10h.01"
                />
              </svg>
            </AvatarFallback>
          </Avatar>
          <button className="bg-[#212121] hover:bg-[#313131] text-white text-xs font-medium px-4 py-2 rounded-full border border-gray-700 transition shadow-sm">
            Change Picture
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              readOnly={!isEditing}
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-[#212121] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none ${
                isEditing ? "focus:border-indigo-500" : ""
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              readOnly={!isEditing}
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-[#212121] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none ${
                isEditing ? "focus:border-indigo-500" : ""
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">
              Provider
            </label>
            <input
              type="text"
              name="provider"
              readOnly={!isEditing}
              value={formData.provider}
              onChange={handleChange}
              className={`w-full bg-[#212121] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 uppercase focus:outline-none ${
                isEditing ? "focus:border-indigo-500" : ""
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">
              Enabled
            </label>
            <input
              type="text"
              readOnly
              value={formData.enable ? "Yes" : "No"}
              className="w-full bg-[#212121] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none"
            />
          </div>
        </div>

        {isEditing ? (
          <div className="flex space-x-4">
            <button
              onClick={handleSave}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg text-sm transition shadow-sm"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-[#212121] hover:bg-[#313131] text-white font-medium py-2.5 rounded-lg text-sm border border-gray-700 transition shadow-sm"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full bg-[#e5e5e5] hover:bg-white text-black font-medium py-2.5 rounded-lg text-sm transition shadow-sm"
          >
            Edit Profile
          </button>
        )}
      </div>

      <div className="bg-[#181818] border border-gray-800 rounded-xl p-8 shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Account Settings</h2>

        <div className="space-y-4">
          <button className="w-full bg-[#212121] hover:bg-[#313131] text-white font-medium py-2.5 rounded-lg text-sm border border-gray-700 transition shadow-sm">
            Change Password
          </button>

          <button className="w-full bg-[#7f2d35] hover:bg-[#8f323b] text-white font-medium py-2.5 rounded-lg text-sm transition shadow-sm">
            Delete Account
          </button>
        </div>
      </div>
    </main>
  );
}

export default UserProfile;

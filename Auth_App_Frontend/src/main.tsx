import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import RootLayout from "./pages/RootLayout.tsx";
import UserLayout from "./pages/user/UserLayout.tsx";
import UserHome from "./pages/user/UserHome.tsx";
import UserProfile from "./pages/user/UserProfile.tsx";
import OAuthSuccess from "./pages/user/OAuthSuccess.tsx";
import OAuthFailure from "./pages/user/OAuthFailure.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<UserLayout />}>
          <Route index element={<UserHome />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Route>
      <Route path="oauth/success" element={<OAuthSuccess />} />
      <Route path="oauth/failure" element={<OAuthFailure />} />
    </Routes>
  </BrowserRouter>,
);

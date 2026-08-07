import React from "react";
import useAuth from "../../auth/store";
import { Navigate, Outlet } from "react-router";

function UserLayout() {
  const checkLogin = useAuth((state) => state.checkIsLoggedIn);

  if (checkLogin()) {
    return (
      <>
        <Outlet />
      </>
    );
  } else return <Navigate to={"/login"} />;
}

export default UserLayout;

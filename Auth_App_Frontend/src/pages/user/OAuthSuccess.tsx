import React, { useEffect, useState } from "react";
import useAuth from "../../auth/store";
import { refreshToken } from "../../services/AuthServices";
import toast from "react-hot-toast";
import { Spinner } from "../../components/ui/spinner";
import { useNavigate } from "react-router";

function OAuthSuccess() {
  const navigate = useNavigate();
  const changeLocalLoginData = useAuth((state) => state.changeLocalLoginData);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  useEffect(() => {
    async function getAccessToken() {
      if (!isRefreshing) {
        //refreshing is:
        setIsRefreshing(true);
        try {
          const responseLoginData = await refreshToken();
          changeLocalLoginData(
            responseLoginData.accessToken,
            responseLoginData.userDto,
            true,
          );
          toast.success("Login Successful");
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          toast.error("Getting error while login");
        } finally {
          setIsRefreshing(false);
        }
      }
    }
    getAccessToken();
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <Spinner />
      <h1 className="text-2xl">Please wait......</h1>
    </div>
  );
}

export default OAuthSuccess;

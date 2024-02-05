import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({ baseURL: "http://localhost:5000", });

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access_token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // intercepts 401 and 403 status ===========
    //   axiosSecure.interceptors.response.use(
    //      (response) => response,
    //     async (error) => {
    //       const status = error.response.status;
    //       // console.log('status error in the interceptor', status);
    //       // for 401 or 403 logout the user and move the user to the login
    //       if (status === 401 || status === 403) {
    //         await logOut()
    //         navigate("/login");
    //       }
    //       return Promise.reject(error);
    //     }
    //   );
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
};
export default useAxiosSecure;

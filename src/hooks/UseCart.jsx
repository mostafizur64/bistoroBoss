import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseCart = () => {
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  // token =================
  const token = localStorage.getItem("access-token");

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],

    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/carts?email=${user.email},`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return res.json();
    // },

    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user.email}`);
      console.log("res from axios");
      return res.data;
    },
  });
  return [cart, refetch];
};

export default UseCart;

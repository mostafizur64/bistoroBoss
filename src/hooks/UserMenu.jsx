import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const UserMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://bbossserver-production.up.railway.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => setMenu(data));
  //   setLoading(false);
  // }, []);

  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(
        "https://bbossserver-production.up.railway.app/menu"
      );
      return res.json();
    },
  });

  return [menu, loading, refetch];
};

export default UserMenu;

import React, { useEffect, useState } from "react";
import Subtitle from "../../../Components/Subtitle/Subtitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import UserMenu from "../../../hooks/UserMenu";

const PopularItem = () => {
 const [menu] = UserMenu();

 const popular = menu.filter(item=>item.category === 'popular');

  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItem = data.filter((item) => item.category === "popular");
  //       setMenu(popularItem);
  //     });
  // }, []);

  return (
    <section className="mb-12">
      <Subtitle heading="From Our Menu" subTitle="Popular Items" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-8 uppercase">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularItem;

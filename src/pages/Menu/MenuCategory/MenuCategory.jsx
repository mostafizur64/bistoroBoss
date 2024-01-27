import React from "react";
import PopularItem from "../../Home/PopularItem/PopularItem";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-10">
      {title && <Cover img={img} title={title} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-24">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4  mb-12 uppercase">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;

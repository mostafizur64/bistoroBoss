import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img className="w-full " src={image} alt="Shoes" />
        </figure>
        <p className="absolute top-2 right-2 bg-black text-white text-lg p-2 w-[80px] text-center rounded-lg">{price}</p>
        <div className="card-body text-center">
          <h2 className="card-title text-center flex flex-col items-center justify-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center mt-2">
            <button className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

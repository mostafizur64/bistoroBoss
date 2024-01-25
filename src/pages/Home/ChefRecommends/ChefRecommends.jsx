import React from "react";
import Subtitle from "../../../Components/Subtitle/Subtitle";
import img from "../../../assets/home/slide1.jpg";
const items = [
  {
    _id: 1,
    img: img,
    title: "Caeser Salad",
    menu: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
  },
  {
    _id: 2,
    img: img,
    title: "Caeser Salad",
    menu: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
  },
  {
    _id: 3,
    img: img,
    title: "Caeser Salad",
    menu: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
  },
];
const ChefRecommends = () => {
  return (
    <section>
      <Subtitle heading={"Chef recommends"} subTitle={"Should Try"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item._id} className=" ">
            <div className="text-center bg-slate-500 bg-opacity-20">
              <img className="w-full" src={item.img} alt="img" />
              <div className="p-12">
                <p className="text-3xl text-black">{item.title}</p>
                <p className="text-lg mt-4">{item.menu}</p>
              <button className="btn btn-outline border-0 border-b-4 mt-8 uppercase text-yellow-500 hover:text-yellow-500">add to cart</button>
            </div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;

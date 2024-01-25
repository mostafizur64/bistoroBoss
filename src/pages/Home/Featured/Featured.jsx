import React from "react";
import Subtitle from "../../../Components/Subtitle/Subtitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-Img bg-fixed text-white pt-12 my-20">
      <Subtitle subTitle={"check it out"} heading={"Featured Item"} ></Subtitle>
      <div className="md:flex justify-center items-center py-20 px-24 bg-slate-400 bg-opacity-50">
        <div>
          <img src={featuredImg} alt="img" />
        </div>
        <div className="md:ml-10 ">
          <p>Aug 20, 2029 </p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            deleniti, beatae laborum recusandae repellat hic blanditiis?
            Excepturi, ab inventore tenetur harum mollitia ratione rem quisquam,
            ut eius quaerat quod accusantium, architecto libero earum eos fuga.
            A quaerat quia vitae dolore, aliquid laboriosam perferendis nam.
            Tempore illum ullam mollitia repudiandae sapiente!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-8 uppercase">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

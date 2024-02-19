import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import BistroBoss from "../BistroBoss/BistroBoss";
import PopularItem from "../PopularItem/PopularItem";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import CallUs from "../CallUs/CallUs";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

     <div className="md:px-0 px-2">
     <Banner />
      <Category />
      <BistroBoss />
      <CallUs />
      <ChefRecommends />
      <PopularItem />
      <Featured />
      <Testimonials />
     </div>
    </div>
  );
};

export default Home;

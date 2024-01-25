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

      <Banner />
      <Category />
      <BistroBoss />
      <CallUs />
      <ChefRecommends />
      <PopularItem />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;

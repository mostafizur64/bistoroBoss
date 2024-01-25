import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularItem from "../../Home/PopularItem/PopularItem";
import UserMenu from "../../../hooks/UserMenu";
import Subtitle from "../../../Components/Subtitle/Subtitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
  const [menu] = UserMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
      <Subtitle subTitle={"Don't Miss"} heading={"Today's Offer"} />
      <MenuCategory items={dessert} title='DESSERTS' img={dessertImg}/>
      <MenuCategory items={pizza} title='pizza' img={pizzaImg}/>
      <MenuCategory items={salad} title='salad' img={saladImg}/>
      <MenuCategory items={soup} title='soup' img={soupImg}/>
      <MenuCategory items={offered} title='offered' img={saladImg}/>

    </div>
  );
};

export default Menu;

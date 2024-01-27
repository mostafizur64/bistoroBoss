import { Helmet } from "react-helmet-async";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import UserMenu from "../../../hooks/UserMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIn, setTabIn] = useState(initialIndex);

  console.log(category);

  const [menu] = UserMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food" />
      <Tabs defaultIndex={tabIn} onSelect={(index) => setTabIn(index)}>
        <TabList>
          <div className="flex flex-row items-center justify-center md:mt-20 mt-8 ">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </div>
        </TabList>
        <div className="md:mt-20 mt-8 md:mb-20 mb-8">
          <TabPanel>
            <OrderTab item={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab item={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab item={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab item={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab item={drinks} />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Order;

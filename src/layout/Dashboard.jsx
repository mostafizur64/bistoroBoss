import React from "react";
import { FaCalendar, FaShoppingCart, FaUser } from "react-icons/fa";
import {
  FaWallet,
  FaAlignJustify,
  FaBasketShopping,
  FaHardDrive,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden block text-white"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full  text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/">
              <FaUser />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <FaCalendar />
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/dashboard/home">
              <FaShoppingCart />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/menu">
              <FaAlignJustify />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/shop">
              <FaBasketShopping />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <FaHardDrive />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

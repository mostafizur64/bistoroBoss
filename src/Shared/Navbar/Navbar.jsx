import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import UseCart from "../../hooks/UseCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart();
  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navOptions = (
    <div className="lg:flex lg:items-center justify-center">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>

      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaCartShopping />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
    </div>
  );

  return (
    <>
      <div className="navbar fixed z-10  bg-black bg-opacity-20 text-white md:max-w-screen-xl w-full mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span className="md:flex hidden">
                <Link to="#">{user?.displayName}</Link>
              </span>

              <button onClick={handleLogout} className="btn md:ml-4">
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

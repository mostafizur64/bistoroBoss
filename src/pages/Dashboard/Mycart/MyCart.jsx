import React from "react";
import { Helmet } from "react-helmet-async";
import UseCart from "../../../hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = UseCart();
  //   how does reduce work
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bbossserver-production.up.railway.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast.success("Item deleted successfully!");
            }
          });
      }
    });
  };
  return (
    <div className="w-full px-12">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <h2 className="text-4xl font-medium">My Cart</h2>
      <div className="uppercase flex items-center justify-between gap-4 mt-12 bg-[#D1A054] p-4 rounded-lg">
        <h2 className="md:text-[18px] text-[12px]" >Total Order : {cart.length}</h2>
        <h2 className="md:text-[18px] text-[12px]" >Total price : ${total}</h2>
        <Link to="/dashboard/payment">
          <button className="btn btn-warning btn-sm uppercase text-black font-medium">
            pay
          </button>
        </Link>
      </div>

      {/* table section  */}
      <div className="overflow-x-auto mt-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;

import React from "react";
import Subtitle from "../../../Components/Subtitle/Subtitle";
import UserMenu from "../../../hooks/UserMenu";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ManageItem = () => {
  const [menu, , refetch] = UserMenu();
  const [axiosSecure] = useAxiosSecure();

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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("Delete res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success("Item deleted Successfully!");
          }
        
        });
      }
    });
  };

  return (
    <div className="w-full">
      <Subtitle subTitle="Hurry Up" heading="Manage  Items" />

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-right">{item.price}</td>
                  <th className="">
                    <FaRegEdit size={25} className="text-yellow-400" />
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost  bg-red-600 text-white"
                    >
                      <FaTrashAlt size={25} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;

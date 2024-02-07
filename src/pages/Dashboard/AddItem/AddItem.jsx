import React from "react";
import Subtitle from "../../../Components/Subtitle/Subtitle";
import { Helmet } from "react-helmet-async";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const img_hosting_token = import.meta.env.VITE_IMG_HOSTING_TOKEN;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const img_url = imgResponse.data.display_url;
          const { name, recipe, price, category } = data;
          const newItem = {
            name,
            recipe,
            price: parseFloat(price),
            category,
            image: img_url,
          };

          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId){
              reset();
              toast.success("Menu Item added successfully!");
            }
          });
        }
      });
  };

  return (
    <div className="px-12 w-full">
      <Helmet>
        <title>Bistro Boss Dashboard | Add Item</title>
      </Helmet>
      <Subtitle subTitle="What's new" heading="Add an item" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
          </label>
          <input
            {...register("name", { required: true, maxLength: 120 })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full  dark:bg-white dark:text-black "
          />
        </div>
        <div className="md:flex items-center gap-8">
          <div className="form-control w-full ">
            <label className="label">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
            </label>
            <select
              defaultValue={"Pick one"}
              {...register("category", { required: true })}
              className="select select-primary w-full "
            >
              <option disabled>pick one</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Dissert</option>
              <option>Offered</option>
            </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full  dark:bg-white dark:text-black "
            />
          </div>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            cols={6}
            rows={5}
            className="textarea textarea-bordered"
            placeholder="Write recipe"
          ></textarea>
        </div>
        <div className="mt-4">
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>
        <div className="mt-4 flex items-end justify-center">
          <button type="submit" className="btn btn-warning text-lg w-[30%]">
            Add Item <FaUtensils />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;

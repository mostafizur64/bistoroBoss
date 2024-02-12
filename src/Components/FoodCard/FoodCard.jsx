import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../../hooks/UseCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = UseCart();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        price,
        image,
        email: user.email,
      };
      fetch("https://bbossserver-production.up.railway.app/carts", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //refetch cart to update the number of card instant
            toast.success("Added to cart successfully");
          }
        });
    } else {
      toast.success("Not to add cart successfully");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img className="w-full " src={image} alt="Shoes" />
        </figure>
        <p className="absolute top-2 right-2 bg-black text-white text-lg p-2 w-[80px] text-center rounded-lg">
          {price}
        </p>
        <div className="card-body text-center">
          <h2 className="card-title text-center flex flex-col items-center justify-center">
            {name}
          </h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center mt-2">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

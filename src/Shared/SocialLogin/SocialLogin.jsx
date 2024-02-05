import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signInWithGoogle } = useContext(AuthContext);

  const handleWithGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const savedData = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("User login with google  successfully!");
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={handleWithGoogleSignIn}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;

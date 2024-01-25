import chefServices from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
const backgroundImageStyle = {
    backgroundImage: `url(${chefServices})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh", // You can adjust the height accordingly
    // Add any additional styles you need
  };

  return (
    <div className="bistro-boss mb-24" style={backgroundImageStyle}>
      <div className="md:p-24 p-4">
        <div className="text-center bg-white  md:p-24 p-4 md:block hidden">
          <h1 className="text-4xl text-black font-medium uppercase leading-9 tracking-[5px]">
            Bistro boss
          </h1>
          <p className="mt-8 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint sit
            aliquam quisquam, quidem ut ex et necessitatibus eum delectus id
            facere eos dicta aliquid fugit blanditiis in architecto accusantium
            beatae.delectus id facere eos dicta aliquid fugit blanditiis in
            architecto accusantium
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;

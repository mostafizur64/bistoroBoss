import React from "react";

const Subtitle = ({ subTitle, heading,text }) => {
  return (
    <div className="text-center py-8 md:w-4/12 mx-auto ">
      <p className="text-yellow-600 text-xl">--- {subTitle} ---</p>
      <h2 className="text-4xl font-medium text-black uppercase mt-4 py-4 border-y-4">
        {heading}
      </h2>
    </div>
  );
};

export default Subtitle;

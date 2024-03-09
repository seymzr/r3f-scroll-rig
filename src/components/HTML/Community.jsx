import React from "react";

const Community = () => {
  return (
    <div className="community text-white my-8 mx-4 p-5 flex items-center justify-center">
      <div className="circles w-full">
        <div className="circle3"></div>
        <div className="circle2"></div>
        <div className="circle1"></div>
      </div>
      <div className="text">
        <h2 className="text-5xl md:text-7xl font-medium ">
          <span className="text-[orange]">Our</span> Community
        </h2>
        <p className="text-xl md:text-3xl py-3">
          Join the SABAH.HUB ecosystem and get access to the brightest experts
          in the world’s leading education and corporate institutions
        </p>
      </div>
    </div>
  );
};

export default Community;

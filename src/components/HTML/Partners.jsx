import React from "react";
import asana from "../../assets/asanaLogo.png";
// import { Particle } from "../Particle";
import purpleParticle from '../../assets/purpleparticle.png'
import orangeParticle from '../../assets/orangeparticle.png'
const Partners = () => {
  return (
    <div className="text-white container mx-auto flex items-center flex-col">
      <h2 className="text-8xl font-medium py-6">Partners</h2>
      <div className="flex items-center justify-between w-full">

      <div className="smallcircle " style={{ alignSelf: "flex-end" }}>
          {" "}
          <img src={asana} alt="asana.png" />
        </div>

        <div className="smallcircle " style={{ alignSelf: "flex-start" }}>
          {" "}
          <img src={asana} alt="asana.png" />
        </div>
        <div className="bigcircle">
          {" "}
          <img src={asana} alt="asana.png" />
        </div>
        <div className="smallcircle" style={{ alignSelf: "flex-start" }}>
          {" "}
          <img src={asana} alt="asana.png" />
        </div>
        <div className="smallcircle" style={{ alignSelf: "flex-end" }}>
          {" "}
          <img src={asana} alt="asana.png" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

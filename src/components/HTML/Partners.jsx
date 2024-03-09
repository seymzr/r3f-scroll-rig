import React from "react";
import asana from "../../assets/asanaLogo.png";
// import { Particle } from "../Particle";
import purpleParticle from '../../assets/purpleparticle.png'
import orangeParticle from '../../assets/orangeparticle.png'
const Partners = () => {
  return (
    <div className="partners">
      <h2>Partners</h2>
      <div>

          <div className="partner1">
           <img src={purpleParticle} alt="purpleparticle" />
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

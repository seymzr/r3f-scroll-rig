import React, { useEffect, useRef } from "react";
import WeMake from "./WeMake";
import Numbers from "./Numbers";
import Count from "./Count";
import IndexAbout from "./IndexAbout";
import Community from "./Community";
import Partners from "./Partners";
import Services from "./Services";
import Footer from "./Footer";

const Overlay = () => {
  return (
    <div className="overlay">
      <div className="section">
        <WeMake />
      </div>
      <div className="section">
        <Numbers />
      </div>
      <div className="section">
        <Count />
      </div>
      <div className="section">
        <IndexAbout />
      </div>
      <div className="section">
        <Community />
      </div>
      <div className="section">
        <Partners />
      </div>
      <div className="section">
        <Services />
      </div>
      <div className="section">
        <Footer />
      </div>
    </div>
  );
};

export default Overlay;

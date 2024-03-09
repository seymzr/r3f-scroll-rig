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
    <div className="overlay ">
      <section className="section">
        <WeMake />
      </section>
      <section className="section">
        <Numbers />
      </section>
      <section className="section">
        <Count />
      </section>
      <section className="section">
        <IndexAbout />
      </section>
      <section className="section">
        <Community />
      </section>
      <section className="section">
        <Partners />
      </section>
      <section className="section">
        <Services />
      </section>
      <section className="section">
        <Footer />
      </section>
    </div>
  );
};

export default Overlay;

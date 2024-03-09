import React, { useEffect, useRef } from "react";
import WeMake from "./WeMake";
import Numbers from "./Numbers";
import Count from "./Count";
import IndexAbout from "./IndexAbout";
import Community from "./Community";
import Partners from "./Partners";
import Services from "./Services";
import Footer from "./Footer";

import {motion} from 'framer-motion'
const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
    style={{transform:"rotateX(180deg)"}}
      className={`
      
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};
const Overlay = () => {
  return (
    <div className="overlay ">
      <Section className="Section">
        <WeMake />
      </Section>
      <Section className="Section">
        <Numbers />
      </Section>
      <Section className="Section">
        <Count />
      </Section>
      <Section className="Section">
        <IndexAbout />
      </Section>
      <Section className="Section">
        <Community />
      </Section>
      <Section className="Section">
        <Partners />
      </Section>
      <Section className="Section">
        <Services />
      </Section>
      <Section className="Section">
        <Footer />
      </Section>
    </div>
  );
};

export default Overlay;

import React, { useContext, useEffect, useRef, useState } from "react";
import WeMake from "./WeMake";
import Numbers from "./Numbers";
import Count from "./Count";
import IndexAbout from "./IndexAbout";
import Community from "./Community";
import Partners from "./Partners";
import Services from "./Services";
import Footer from "./Footer";

import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import AppContext from "../../Context/Context";

const Section = (props) => {
  const { children, mobileTop,index,isInView,setIsInView } = props;
  const { currentSection, setCurrentSection} = useContext(AppContext);

  const [ref, inView] = useInView();

  if (inView && !currentSection) {
    // Section is in view for the first time
    setIsInView(index>2?index+0.5:index)

    console.log(isInView)
    
    // Perform actions or set values as needed
    // For example:
    // setSectionValue(true);
  }
  // useEffect(()=>{
  //   setIsInView(index)
  // },[isInView])
  return (
    <motion.section
    ref={ref}
      className={`
      
  h-screen w-screen p-8 max-w-full-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-center md:justify-center" : "justify-center"}
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
          delay: 0.3,
        },
        
        
      }}
    >
      {children}
    </motion.section>
  );
};
const Overlay = ({isInView,setIsInView,navOpened,setNavOpened}) => {
  return (
    <div className="overlay ">
      <Section isInView={isInView} setIsInView={setIsInView} index={0} mobileTop className="Section">
        <WeMake />
      </Section>
      <Section isInView={isInView} setIsInView={setIsInView} index={1} className="Section">
        <Numbers />
      </Section>
      <section   className="h-[60vh]"></section>
      <Section isInView={isInView} setIsInView={setIsInView} index={3} className="Section">
        <Count />
      </Section>
      <Section isInView={isInView} setIsInView={setIsInView} index={4} className="Section">
        <IndexAbout />
      </Section>
      <Section isInView={isInView} setIsInView={setIsInView} index={5} className="Section">
        <Community />
      </Section>
      <Section isInView={isInView} setIsInView={setIsInView} index={6} className="Section">
        <Partners />
      </Section>
      <Section isInView={isInView} setIsInView={setIsInView} index={7} className="Section">
        <Services navOpened={navOpened} setNavOpened={setNavOpened} />
      </Section>
      
    </div>
  );
};

export default Overlay;

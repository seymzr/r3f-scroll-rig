import React, { useState } from "react";
import arrowup from "../../assets/arrowup.svg";
import sabahacademy from '../../assets/sabahacademy.png'
import sabahlab from '../../assets/sabahlab.png'
import sabahfund from '../../assets/sabahfund.png'
import sabahincubation from '../../assets/sabahincubation.png'
import sabahstudio from '../../assets/sabahstudio.png'
import CardDeck from "./CardDeck";
const IndexAbout = () => {

  const [leftPressed, setLeftPressed] = useState(null);
  const [rightPressed, setRightPressed] = useState(null);
  const cardOptions = [
    {
      logo:sabahacademy,
      text:"It is a 3-month program which offers unique educational platform that aims to make Azerbaijan more sustainable in the global market. Knowledge of the most complex entrepreneurial processes is simplified here and made accessible to students and entrepreneurs."
    },
    {
      logo:sabahfund,
      text:"It is a 3-month program which offers unique educational platform that aims to make Azerbaijan more sustainable in the global market. Knowledge of the most complex entrepreneurial processes is simplified here and made accessible to students and entrepreneurs."
    },{
      logo:sabahstudio,
      text:"It is a 3-month program which offers unique educational platform that aims to make Azerbaijan more sustainable in the global market. Knowledge of the most complex entrepreneurial processes is simplified here and made accessible to students and entrepreneurs."
    },{
      logo:sabahincubation,
      text:"It is a 3-month program which offers unique educational platform that aims to make Azerbaijan more sustainable in the global market. Knowledge of the most complex entrepreneurial processes is simplified here and made accessible to students and entrepreneurs."
    },{
      logo:sabahlab,
      text:"It is a 3-month program which offers unique educational platform that aims to make Azerbaijan more sustainable in the global market. Knowledge of the most complex entrepreneurial processes is simplified here and made accessible to students and entrepreneurs."
    },
  ];

  const onLeftPressed = () => {
    setLeftPressed((prev) => !prev);
  };

  const onClickRight = () => {
    setRightPressed((prev) => !prev);
  };

  return (
    <div className="about container mx-auto text-white flex flex-col md:flex-row items-center justify-between my-8">
      <div className="about1 w-full ">
        <CardDeck  leftPressed={leftPressed}
        rightPressed={rightPressed}
        cards={cardOptions}/> 
      </div>
      <div className="about2 w-full">
        <h3 className="text-4xl md:text-6xl">
          SABAH<span className="text-[#60F486]" >.</span>academy
        </h3>
        <p className="text-[#C5C5C5] text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <button onClick={onClickRight}>

        <img src={arrowup} alt="arrowup.svg" />
        </button>
        <ul className="list-style-none">
          <li className="text-xl md:text-4xl font-medium my-3 text-[#b4b4b4] py-3 hover:text-white duration-300 border-y border-solid border-[#797979]">SABAH.incubation</li>
          <li  className="text-xl md:text-4xl font-medium my-3 text-[#b4b4b4] py-3 hover:text-white duration-300 border-b border-solid border-[#797979]">SABAH.lab</li>
          <li className="text-xl md:text-4xl font-medium my-3 text-[#b4b4b4] py-3 hover:text-white duration-300 border-b border-solid border-[#797979]">SABAH.studio</li>
          <li className="text-xl md:text-4xl font-medium my-3 text-[#b4b4b4] py-3 hover:text-white duration-300 border-b border-solid border-[#797979]">SABAH.fund</li>
        </ul>
      </div>
    </div>
  );
};

export default IndexAbout;

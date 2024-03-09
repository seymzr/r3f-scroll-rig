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
    <div className="about">
      <div className="about1">
        <CardDeck  leftPressed={leftPressed}
        rightPressed={rightPressed}
        cards={cardOptions}/>
      </div>
      <div className="about2">
        <h3>
          SABAH<span style={{ color: "#60F486" }}>.</span>academy
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <button onClick={onClickRight}>

        <img src={arrowup} alt="arrowup.svg" />
        </button>
        <ul>
          <li>SABAH.incubation</li>
          <li>SABAH.lab</li>
          <li>SABAH.studio</li>
          <li>SABAH.fund</li>
        </ul>
      </div>
    </div>
  );
};

export default IndexAbout;

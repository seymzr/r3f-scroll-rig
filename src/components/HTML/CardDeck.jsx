import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const CardDeck = ({ cards, leftPressed, rightPressed }) => {
  const [deck, setDeck] = useState(cards);
  const cardRefs = useRef([]);
  const lastActionRef = useRef(null);

  const animateToBackOfDeck = (target, card, index) => {
    gsap.to(target, {
      x: -450,
      y: -300,
      scale: 0.9,
      zIndex: 0,
      rotation: 0,
      duration: 0.35,
      onComplete: function () {
        gsap.set(card, { scale: 1 });
        const newDeck = [...deck];
        const newDeckRef = [...cardRefs.current];
        const [removed] = newDeck.splice(index, 1);
        const [removedRef] = newDeckRef.splice(index, 1);
        newDeck.push(removed);
        newDeckRef.push(removedRef);
        cardRefs.current = newDeckRef;
        setDeck(newDeck);
      },
    });
  };

  const animateToFrontOfDeck = (target, card, index) => {
    gsap.set(target, { zIndex: cardRefs.current.length + 1 });

    gsap.fromTo(
      target,
      { x: 250, y: 0 },
      {
        x: -450,
        y: -400,
        scale: 1,
        rotate: 0,
        onComplete: function () {
          gsap.set(card, { scale: 1 });
          const newDeck = [...deck];
          const newDeckRef = [...cardRefs.current];
          const [removed] = newDeck.splice(index, 1);
          const [removedRef] = newDeckRef.splice(index, 1);
          newDeck.unshift(removed);
          newDeckRef.unshift(removedRef);
          cardRefs.current = newDeckRef;
          setDeck(newDeck);
        },
      }
    );
  };

  // Button handlers

  useEffect(() => {
    if (leftPressed !== null) {
      lastActionRef.current = "right";
      gsap.set(cardRefs.current[cardRefs.current.length - 1], { scale: 0.1 });
      gsap.to(cardRefs.current[cardRefs.current.length - 1], {
        x: 250,
        scale: 1.1,
        duration: 0.25,
        onComplete: function () {
          animateToFrontOfDeck(
            cardRefs.current[cardRefs.current.length - 1],
            cardRefs.current[cardRefs.current.length - 1],
            cardRefs.current.length - 1
          );
        },
      });
    }
  }, [leftPressed]);

  useEffect(() => {
    if (rightPressed !== null) {
      lastActionRef.current = "left";
      gsap.to(cardRefs.current[0], {
        x: -450,
        y:-400,
        scale: 1,
        duration: 0.25,
        onComplete: function () {
          animateToBackOfDeck(cardRefs.current[0], cardRefs.current[0], 0);
        },
      });
    }
  }, [rightPressed]);

  // drag handler
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.set(card, { zIndex: deck.length - index });
      let prevPosition = `${(index + 1)}`;
      if (lastActionRef.current === "right") {
        gsap.to(
          card,

          {x:prevPosition*-10,y:prevPosition*-10,rotation: `0deg`, duration: 0.25 }
        );
      } else {
        gsap.fromTo(
          card,
          { x:prevPosition*-10,y:prevPosition*-10,rotation: '0deg' },
          { x:prevPosition*-10,y:prevPosition*-10,rotation: `0deg`, duration: 0.25 }
        );
      }

      Draggable.create(card, {
        type: "x,y",
        bounds: { minX: -100, maxX: 100, maxY: 100, minY: -100 },
        edgeResistance: 0.75,
        onDragEnd: function () {
          lastActionRef.current = "left";
          if (Math.abs(this.x) >= 50 || Math.abs(this.y) >= 50) {
            gsap.set(this.target, { zIndex: 0 });
            animateToBackOfDeck(this.target, card, index);
          } else {
            gsap.to(this.target, { x: 0, y: 0 });
          }
        },
      });
    });
  }, [deck]);

  return (
    <div className="bg-[#DEDEDE] w-[600px] h-[500px] relative rounded-[8px]">
      {deck.map((card, index) => (
        <div
          className="card bg-[#e9e9e9] absolute top-[50px] left-[50px] drop-shadow-md w-[600px] h-[500px] rounded-[8px] p-8"
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{ position: "absolute" }}
        >
          <img src={card.logo} alt="sabahacademy.png" />
            <hr className="h-[2px] bg-[#502688] border-0 w-[30%] my-5" />
            <p className="text-[#171717] bg-[#fbfbfb] px-4 py-6 rounded-[8px]">
              {card.text}
            </p>
            <button className="gradientbutton my-4">Learn More</button>
        </div>
      ))}
    </div>
  );
};

export default CardDeck;

import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Count = () => {
  return (
    <div className="count text-white p-2  px-12 container mx-auto flex flex-col md:flex-row items-center just md:justify-between text-3xl md:text-6xl">
      
      <div className="counts flex flex-col items-center ">
      <h2 className="">
        SABAH<span className="text-[orange]">.</span>HUB{" "}
        <span className="text-[orange]">in numbers</span>
      </h2>
        <div className="flex flex-col items-center m-5 font-bold text-5xl md:text-9xl md:self-start">
          <div className="flex items-center" >
            <VisibilitySensor
              partialVisibility
              offset={{ bottom: 100, top: 100 }}
            >
              {({ isVisible }) => (
                <div>{isVisible ? <CountUp end={47} duration={3} /> : 47}</div>
              )}
            </VisibilitySensor>
            mln
          </div>
          <span className=" text-xl md:text-3xl font-normal text-center">Lorem Ipsum</span>
        </div>
        <div className="flex items-center justify-between md:self-start">
          <div className="flex flex-col items-center m-5 font-bold text-4xl md:text-6xl">
            <div className="flex items-center" >
              <VisibilitySensor
                partialVisibility
                offset={{ bottom: 100, top: 100 }}
              >
                {({ isVisible }) => (
                  <div>
                    {isVisible ? <CountUp end={59} duration={2.5} /> : 59}
                  </div>
                )}
              </VisibilitySensor>
              k
            </div>
            <span className="text-xl md:text-3xl font-normal text-center">Lorem Ipsum</span>
          </div>
          <div className="flex flex-col items-center m-5 font-bold text-4xl md:text-6xl">
            <div className="flex items-center" >
              <VisibilitySensor
                partialVisibility
                offset={{ bottom: 100, top: 100 }}
              >
                {({ isVisible }) => (
                  <div>
                    {isVisible ? <CountUp end={40} duration={3} /> : 40}
                  </div>
                )}
              </VisibilitySensor>
              k
            </div>
            <span className=" text-xl md:text-3xl text-center font-normal">Lorem Ipsum</span>
          </div>
        </div>
        <div className="flex items-center justify-between md:self-start">
          <div className="flex flex-col items-center m-5 font-bold text-4xl md:text-6xl">
            <div className="flex items-center" >
              <VisibilitySensor
                partialVisibility
                offset={{ bottom: 100, top: 100 }}
              >
                {({ isVisible }) => (
                  <div>
                    {isVisible ? <CountUp end={25} duration={3} /> : 25}
                  </div>
                )}
              </VisibilitySensor>
              k
            </div>
            <span className=" text-xl md:text-3xl text-center font-normal">Lorem Ipsum</span>
          </div>
          <div className="flex flex-col items-center m-5 font-bold text-4xl md:text-6xl">
            <div className="flex items-center" >
              <VisibilitySensor
                partialVisibility
                offset={{ bottom: 100, top: 100 }}
              >
                {({ isVisible }) => (
                  <div>
                    {isVisible ? <CountUp end={76} duration={3} /> : 76}
                  </div>
                )}
              </VisibilitySensor>
              k
            </div>
            <span className=" text-xl md:text-3xl text-center font-normal">Lorem Ipsum</span>
          </div>
        </div>
      </div>
      <div >
        
      </div>
    </div>
  );
};

export default Count;

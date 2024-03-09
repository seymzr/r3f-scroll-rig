import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Count = () => {
  return (
    <div className="count">
      
      <div className="counts">
        <div className="single">
          <div style={{ display: "flex", alignItems: "center" }}>
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
          <span className="span">Lorem Ipsum</span>
        </div>
        <div className="double">
          <div className="single">
            <div style={{ display: "flex", alignItems: "center" }}>
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
            <span className="span">Lorem Ipsum</span>
          </div>
          <div className="single">
            <div style={{ display: "flex", alignItems: "center" }}>
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
            <span className="span">Lorem Ipsum</span>
          </div>
        </div>
        <div className="double">
          <div className="single">
            <div style={{ display: "flex", alignItems: "center" }}>
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
            <span className="span">Lorem Ipsum</span>
          </div>
          <div className="single">
            <div style={{ display: "flex", alignItems: "center" }}>
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
            <span className="span">Lorem Ipsum</span>
          </div>
        </div>
      </div>
      <div >
        
      </div>
    </div>
  );
};

export default Count;

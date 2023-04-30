import React, { useEffect, useRef } from "react";
import "./Timer.css";

function Timer({ seconds }) {
  // for screens greater than 415px with
  const strokeOffsetRef = useRef(170);

  useEffect(() => {
    const mediaHanlder = (x) => {
      if (x.matches) {
        strokeOffsetRef.current = 115;
      } else {
        strokeOffsetRef.current = 170;
      }
    };

    const mediaQueryObj = window.matchMedia("(max-width: 415px)");
    mediaHanlder(mediaQueryObj);

    const mediaQueryListener = (event) => {
      mediaHanlder(event.target);
    };

    mediaQueryObj.addEventListener("change", mediaQueryListener);

    return () => {
      mediaQueryObj.removeEventListener("change", mediaQueryListener);
    };
  }, []);

  const calculateCirclePercentage = () => {
    return (seconds / 60) * 100;
  };

  return (
    <div className="timer-container">
      <div className="timer">{seconds}</div>
      <svg className="circle-animation">
        <circle
          className="circle"
          r="46%"
          cx="50%"
          cy="50%"
          style={{
            strokeDashoffset: (calculateCirclePercentage() / 100) * strokeOffsetRef.current
          }}
        />
      </svg>
    </div>
  );
}

export default Timer;

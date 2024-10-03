import React, { useEffect, useRef } from 'react';
import "./csstimer.css";

const Timer = ({ text }) => {
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);
  const millisecondsRef = useRef(null);
 
  let startTime;
  let interval;

  const start = () => {
    startTime = Date.now();
    interval = setInterval(updateDisplay, 10);
  };

  useEffect(() => {
    start();
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const updateDisplay = () => {
    const elapsedTime = Date.now() - startTime;
    const minutesValue = Math.floor(elapsedTime / 60000);
    const secondsValue = Math.floor((elapsedTime - minutesValue * 60000) / 1000);
    const millisecondsValue = Math.floor((elapsedTime - minutesValue * 60000 - secondsValue * 1000) / 10);

    // Check if the refs are not null before accessing their properties
    if (minutesRef.current) {
      minutesRef.current.textContent = minutesValue < 10 ? '0' + minutesValue : minutesValue;
    }
    if (secondsRef.current) {
      secondsRef.current.textContent = secondsValue < 10 ? '0' + secondsValue : secondsValue;
    }
    if (millisecondsRef.current) {
      millisecondsRef.current.textContent = millisecondsValue < 10 ? '0' + millisecondsValue : millisecondsValue;
    }
  };

  return (
    <div className="stopwatch-container left-1/2 transform -translate-x-1/2 mt-3">
      <div className="display">
        <span ref={minutesRef} className="minutes">00</span>:
        <span ref={secondsRef} className="seconds">00</span>
        <span className="text-xs milliseconds" ref={millisecondsRef}>00</span>
      </div>
    </div>
  );
};

export default Timer;

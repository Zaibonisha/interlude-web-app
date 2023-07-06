import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Timer = ({ breakMinutes }) => {
  const [modal, setModal] = useState(true);
  const [seconds, setSeconds] = useState(59);
  const [isStopped, setIsStopped] = useState(false);
  
  let minutesValue = parseInt(breakMinutes);
  console.log(minutesValue);
  
  const [minutes, setMinutes] = useState(minutesValue);
  const handleModal = () => {
    setModal(!modal);
  };

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });


  const restart = () => {
    setSeconds(0);
    setMinutes(0);

  }

  const stop = () => {
    clearInterval(timer);
    // setIsStopped(!isStopped);
  }

  return (
    <>
      {modal && (
        <div className="p-5 flex flex-col z-50 fixed w-[650px] left-[31%] top-[35%] m-auto filters">
          <button
            type="button"
            onClick={handleModal}
            className="flex flex-row justify-end"
          >
            <FontAwesomeIcon
              icon={faClose}
              className="rounded-[100%] px-2 py-1 border text-[#000]"
            />
          </button>
          <div className="text-center">
            <p className="text-[24px] pb-10">
              {minutes < 10 ? "0" + minutes : minutes}:
              {seconds < 10 ? "0" + seconds : seconds}
            </p>
            <div className="flex flex-row gap-10 justify-center">
              <button type="button" className="end-break-btn text-[#fff]" onClick={restart}>
                Restart
              </button>
              <button type="button" className="end-break-btn text-[#fff]" onClick={stop}>
                {/* {isStopped ? "Resume" : "Stop"} */}
                Start
              </button>
              <button type="button" className="end-break-btn text-[#fff]" onClick={stop}>
                {/* {isStopped ? "Resume" : "Stop"} */}
                Go to exercise
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;

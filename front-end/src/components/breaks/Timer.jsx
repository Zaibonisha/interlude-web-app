import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Timer = ({ breakMinutes }) => {
  const [modal, setModal] = useState(true);
  const [seconds, setSeconds] = useState(59);
  // const [isStopped, setIsStopped] = useState(false);
  let minutesValue = parseInt(breakMinutes);

  // const today = minutesValue * 60;
  const [minutes, setMinutes] = useState(minutesValue);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds - 1);
      if (seconds === 0 && minutes > 0) {
        setSeconds(59);
        // setSeconds(seconds - 1);
      } else if (minutes === 0 && seconds === 0) {
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000)

    setTimeout(() => {
      setMinutes(minutes - 1);
      if (minutes === 0 && seconds === 0) {
        setMinutes(0);
        setSeconds(0);
      }
    }, 60000);
  }, [seconds, minutes]);

  // console.log(time);
  const handleModal = () => {
    setModal(!modal);
  };

  // let timer;

  // useEffect(() => {
    
    //   timer = setInterval(() => {
    //     setSeconds(seconds - 1);
    //     if (seconds === 0) {
    //       setMinutes(minutes - 1);
    //       setSeconds(0);
    //     }
    //   }, 1000);
  //   return () => clearInterval(timer);
  // });


  // const restart = () => {
  //   setSeconds(0);
  //   setMinutes(0);
  //   // console.log("new");

  // }

  // const stop = () => {
  //   setIsStopped(!isStopped);
  //   // clearInterval(timer);
  // }

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
            <p>You break time:</p>
            <p className="text-[24px] pb-10">
              {minutes < 10 ? "0" + minutes : minutes}:
              {seconds < 10 ? "0" + seconds : seconds}
              {/* {getFormattedTime()} */}
            </p>
            <div className="flex flex-row gap-10 justify-center">
              {/* <button type="button" className="end-break-btn text-[#fff]" onClick={restart}>
                Restart
              </button> */}
              {/* <button type="button" className="end-break-btn text-[#fff]" onClick={stop}> */}
                {/* {isStopped ? "Resume" : "Stop"} */}
                {/* Stop */}
              {/* </button> */}
              <Link to="/exercise">
              <button type="button" className="end-break-btn text-[#fff]">
                Go to exercise
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;

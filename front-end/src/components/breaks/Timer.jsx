import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Timer =() => {
  const [modal, setModal] = useState(true);

  const handleModal = () => {
    setModal(!modal);
  }
  return (
    <>
    {modal && (
    <div className="p-5 flex flex-col fixed w-[650px] left-[31%] top-[35%] m-auto filters">
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
      <p className="text-[24px] pb-10">00:00:00</p>
      <button type="button" className="end-break-btn text-[#fff]">End Break</button>
    </div>
    </div>
    )}
    </>
  )
};

export default Timer;

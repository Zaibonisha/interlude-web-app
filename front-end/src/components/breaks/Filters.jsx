import React from 'react';
import '../../assets/styles/breaks/filters.css';

const Filters = () => {
  return (
    <div className="p-10 flex flex-col gap-5 text-[14px] w-[650px] m-auto filters">
      <h2 className="text-[#FF1368]">Filters:</h2>
      <ul>
        <li>
          <div className="flex flex-row gap-10 items-center">
            <h3 className="text-[#8445E8]">difficult level</h3>
            <span className="flex flex-row gap-5 items-center">
              <div>
                <input type="radio" name="difficult_level" value="easy" className="mr-1"/>
                <label htmlFor="easy" className="text-[#4D67C6]">easy</label>
              </div>
              <div>
                <input type="radio" name="difficult_level" value="medium" className="mr-1"/>
                <label htmlFor="medium" className="text-[#4D67C6]">medium</label>
              </div>
              <div>
                <input type="radio" name="difficult_level" value="hard" className="mr-1"/>
                <label htmlFor="hard" className="text-[#4D67C6]">hard</label>
              </div>
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
};

export default Filters;

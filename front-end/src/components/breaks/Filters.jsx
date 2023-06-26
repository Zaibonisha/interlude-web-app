import React from "react";
import "../../assets/styles/breaks/filters.css";
import FilterData from "./filterDB";

const Filters = () => {
  return (
    <div className="p-10 flex flex-col gap-5 text-[14px] w-[650px] m-auto filters">
      <h2 className="text-[#FF1368]">Filters:</h2>
      <ul>
        {FilterData.map((item) => (
          <li key={item?.id} className="my-2">
            <div className="flex flex-row gap-10 items-center">
              <h3 className="text-[#8445E8]">{item?.title}:</h3>
              <span className="flex flex-row gap-5 items-center">
                <div>
                  <input
                    type="radio"
                    name={item?.name}
                    value={item?.value[0]}
                    className="mr-1"
                  />
                  <label htmlFor={item?.value[0]} className="text-[#4D67C6]">
                    {item?.value[0]}
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name={item?.name}
                    value={item?.value[1]}
                    className="mr-1"
                  />
                  <label htmlFor={item?.value[1]} className="text-[#4D67C6]">
                    {item?.value[1]}
                  </label>
                </div>
                {item?.value.length > 2 && (
                  <div>
                    <input
                      type="radio"
                      name={item?.name}
                      value={item?.value[2]}
                      className="mr-1"
                    />
                    <label htmlFor={item?.value[2]} className="text-[#4D67C6]">
                      {item?.value[2]}
                    </label>
                  </div>
                )}
                {item?.value.length > 3 && (
                  <div>
                    <input
                      type="radio"
                      name={item?.name}
                      value={item?.value[3]}
                      className="mr-1"
                    />
                    <label htmlFor={item?.value[3]} className="text-[#4D67C6]">
                      {item?.value[3]}
                    </label>
                  </div>
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;

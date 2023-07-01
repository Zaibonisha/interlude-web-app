import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Heart from "../../assets/images/fav-heart.png";
import ProfileImg from "../../assets/images/profile-pic.png";
import CardData from "./db";
import "../../assets/styles/breaks/cards.css";

const Cards = () => {
  const data = CardData;
  const [isClicked, setIsClicked] = useState(false);
  const [clickedId, setClickedId] = useState(0);

  const handleFavourite = (id) => {
    data.map((item) => {
      if (item.id === id) {
        setIsClicked(!isClicked);
        setClickedId(item.id);
        console.log(id, isClicked, item.id, clickedId);
      }
    });
  };

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className="text-[#fff] flex flex-row gap-10 card-container">
      {data &&
        data.map((item) => (
          <ul key={item?.id} className="box">
            <li className="card-bg-image flex flex-col justify-between">
              <span className="flex flex-row justify-between">
                {isClicked && item?.id === clickedId ? (
                  <div
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                    role="button"
                    tabIndex="-3"
                  >
                    {hover ? (
                      <p className="text-[8px]">Remove from Favorite</p>
                    ) : null}
                    <FontAwesomeIcon
                      className="fav-btn-1"
                      onClick={() => handleFavourite(item?.id)}
                      icon={faHeart}
                    />
                  </div>
                ) : (
                  <div
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                    role="button"
                    tabIndex="-3"
                  >
                    {hover ? (
                      <p className="text-[8px]">Add to Favorite</p>
                    ) : null}

                    <img
                      className="fav-btn"
                      src={Heart}
                      alt={item?.category?.difficult}
                      onClick={() => handleFavourite(item?.id)}
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2 text-[#A7DAFF] text-[14px]">
                  <p className="duration-category text-center">
                    {item?.category?.breakTime}
                  </p>
                  <p className="duration-category text-center">
                    {item?.category?.difficult}
                  </p>
                </div>
              </span>
              <div className="flex flex-row gap-5">
                <img
                  src={ProfileImg}
                  alt={item?.category?.difficult}
                  className="profileImg"
                />
                <p>{item?.instructor}</p>
              </div>
            </li>
            <li className="single-card">{item?.description}</li>
            <li>
              <button type="button" className="add-break-btn">
                ADD BREAK
              </button>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Cards;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Heart from "../../assets/images/fav-heart.png";
import ProfileImg from "../../assets/images/profile-pic.png";
import CardData from "./db";
import "../../assets/styles/breaks/cards.css";
import TopBar from "../common/TopBar";
import Cards from "./Cards";
import Filters from "./Filters";

const Index = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [searchState, setSearchState] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [clickedId, setClickedId] = useState(0);

  const handleFavourite = (id) => {
    CardData.map((item) => {
      if (item.id === id) {
        setIsClicked(!isClicked);
        setClickedId(item.id);
        console.log(id, isClicked, item.id, clickedId);
      }
    });
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    handleSearch();
  };

  const handleSearch = () => {
    if (searchText.length > 0) {
      const filteredData = CardData.filter((item) =>
        Object.keys(item).some((key) =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(searchText.toLocaleLowerCase())
        )
      );
      setSearchState(true);
      setSearchedData(filteredData);
      console.log(filteredData);
    } else {
      setSearchedData([]);
      setSearchState(false);
    }
  };

  const searchResult =
    searchedData &&
    searchedData?.map((item) => (
      <ul key={item?.id} className="box">
        <li className="card-bg-image flex flex-col justify-between">
          <span className="flex flex-row justify-between">
            {isClicked && item?.id === clickedId ? (
              <FontAwesomeIcon
                className="fav-btn-1"
                onClick={() => handleFavourite(item?.id)}
                icon={faHeart}
              />
            ) : (
              <img
                className="fav-btn"
                src={Heart}
                alt={item?.difficult}
                onClick={() => handleFavourite(item?.id)}
              />
            )}
            <div className="flex flex-col gap-2 text-[#A7DAFF] text-[14px]">
              <p className="duration-category text-center">{item?.breakTime}</p>
              <p className="duration-category text-center">{item?.difficult}</p>
            </div>
          </span>
          <div className="flex flex-row gap-5">
            <img
              src={ProfileImg}
              alt={item?.difficult}
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
    ));
  return (
    <div>
      <TopBar value={searchResult} handleChange={handleChange} />
      <div className="my-10">
        <Filters />
      </div>
      {!searchState ? (
        <Cards />
      ) : (
        <div className="search-result text-[#fff] flex flex-row gap-10 card-container">
          {searchResult}
        </div>
      )}
    </div>
  );
};

export default Index;

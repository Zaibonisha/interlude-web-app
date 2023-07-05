import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { GrFavorite } from "react-icons/gr";
import TopBar from "../components/common/TopBar";
import cards from "./exerciseCardDB";

const Exercise = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate();

  const handleFavoriteClick = (cardData) => {
    setFavorites((prevFavorites) => [...prevFavorites, cardData]);
    navigate("/favorites");
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    handleSearch();
  };

  const handleSearch = () => {
    if (searchText.length > 0) {
      const filteredData = cards.filter((item) =>
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
  
  const searchResult = searchState &&
    <Grid container spacing={2}>
      {searchedData &&
        searchedData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Card
              style={{
                height: "70vh",
                boxShadow: "none",
                width: "30vw",
                border: "1px solid blue",
              }}
            >
              <CardHeader
                title={card?.title}
                subheader={card?.subtitle}
                action={
                  <IconButton
                    aria-label="card-icon"
                    onClick={() => handleFavoriteClick(card)}
                  >
                    <GrFavorite />
                  </IconButton>
                }
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {card?.content}
                </Typography>
                <div style={{ marginTop: "20px" }}>
                  <iframe
                    width="100%"
                    height="300"
                    src={card?.videoSrc}
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>

  return (
    <div>
      <TopBar value={searchText} handleChange={handleChange} />
      <div className="text-[#fff] flex flex-row">
        {searchResult}
      </div>
      {!searchState && (
        <Grid container spacing={2}>
          {cards &&
            cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={6}>
                <Card
                  style={{
                    height: "70vh",
                    boxShadow: "none",
                    width: "30vw",
                    border: "1px solid blue",
                  }}
                >
                  <CardHeader
                    title={card?.title}
                    subheader={card?.subtitle}
                    action={
                      <IconButton
                        aria-label="card-icon"
                        onClick={() => handleFavoriteClick(card)}
                      >
                        <GrFavorite />
                      </IconButton>
                    }
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {card?.content}
                    </Typography>
                    <div style={{ marginTop: "20px" }}>
                      <iframe
                        width="100%"
                        height="300"
                        src={card?.videoSrc}
                        title="YouTube Video"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
};

export default Exercise;

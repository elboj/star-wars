/* eslint-disable */

import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";
import logo from "../../assets/logo.png";
import hero from "../../assets/hero.jpg";
import useStyles from "./Herostyles";
import InputSearch from "../InputSearch/InputSearch";
import { Link, withRouter } from "react-router-dom";

const HeroSection = ({
  allData,
  setPHide,
  setPG,
  setHide,
  search,
  setSearch,
  handleSearch,
}) => {
  // console.log(
  //   // allData[0].hasOwnProperty("name") && allData[0]["name"] == "Tatooine",
  //   allData.filter(
  //     (data) => data.hasOwnProperty("name") && data.name == "Tatooine"
  //   )
  // );
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [clear, setClear] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      // allData[0].hasOwnProperty("name") && allData[0]["name"] == "Tatooine",
      allData.filter(
        (data) => data.hasOwnProperty("name") && data.name == query
      )
    );
  };

  return (
    <section
      className="main-hero-container"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="main-hero-app-bar">
        <AppBar
          position="static"
          className={classes.appbar}
          color="transparent"
        >
          <Toolbar>
            <Link to="/">
              <Typography
                onClick={() => {
                  setHide(true);
                  setPG(false);
                }}
              >
                <img src={logo} alt="star-wars" height="35px" />
              </Typography>
            </Link>
            <Link to="/people">
              <Typography
                variant="subtitle2"
                onClick={() => {
                  setPHide(true);
                  setPG(false);
                }}
              >
                People
              </Typography>
            </Link>
            <Link to="/ships">
              <Typography variant="subtitle2">Ships</Typography>
            </Link>
            <Link to="/planets">
              <Typography variant="subtitle2">Planets</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <div className="main-hero-content">
        <article className="mhc-article">
          <h2 className="mhc-heading">
            {" "}
            <img src={logo} alt="" height="35px" /> Directory
          </h2>
          <div className="underline"></div>
          <p className="mhc-body">
            Find your Favourite Character, Films, Species,
          </p>
          <p className="mhc-body">Starships and Planets</p>
        </article>
        <InputSearch
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
    </section>
  );
};

export default withRouter(HeroSection);

import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";
import { GoSearch } from "react-icons/go";
import { TiDeleteOutline } from "react-icons/ti";
import logo from "../../assets/logo.png";
import hero from "../../assets/hero.jpg";
import useStyles from "./Herostyles";

const HeroSection = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [clear, setClear] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    setQuery("");
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
            <Typography>
              <img src={logo} alt="star-wars" height="35px" />
            </Typography>
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
        <div className="main-hero-input">
          <form className="mhi-form" onSubmit={handleSubmit}>
            <button className="mhi-button">
              <GoSearch size="1.2rem" />
            </button>
            <input
              type="text"
              className="mhi-field"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button className="mhi-button">
              {query && (
                <TiDeleteOutline
                  size="1.5rem"
                  onClick={() => {
                    setQuery("");
                  }}
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

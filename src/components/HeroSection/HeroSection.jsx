/* eslint-disable */
import React from "react";
import logo from "../../assets/logo.png";
import hero from "../../assets/hero.jpg";
import InputSearch from "../InputSearch/InputSearch";
import Header from "../AppBar/Header";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

const HeroSection = ({
  setPHide,
  setPG,
  setHide,
  search,
  setSearch,
  handleSearch,
  paginationHidden,
  homeDisplay,
}) => {
  return (
    <section
      className="main-hero-container"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="main-hero-app-bar">
        <div>
          <AppBar position="fixed" className="app-bar" color="secondary">
            <Toolbar>
              <Link to="/">
                <Typography onClick={homeDisplay}>
                  <img src={logo} alt="star-wars" height="35px" />
                </Typography>
              </Link>
              <div className="grow"></div>
              <Link to="/people">
                <Typography className="link-text" variant="subtitle2">
                  People
                </Typography>
              </Link>
              <Link to="/ships">
                <Typography variant="subtitle2" className="link-text">
                  Ships
                </Typography>
              </Link>
              <Link to="/planets">
                <Typography variant="subtitle2" className="link-text">
                  Planets
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
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
        {/* <InputSearch
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        /> */}
      </div>
    </section>
  );
};

export default withRouter(HeroSection);

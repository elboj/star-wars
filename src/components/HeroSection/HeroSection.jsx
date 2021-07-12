/* eslint-disable */
import React from "react";
import logo from "../../assets/logo.png";
import hero from "../../assets/hero.jpg";
// import InputSearch from "../InputSearch/InputSearch";
// import Header from "../AppBar/Header";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="main-hero-container"
      style={{ backgroundImage: `url(${hero})` }}
    >
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
      </div>
    </section>
  );
};

export default withRouter(HeroSection);

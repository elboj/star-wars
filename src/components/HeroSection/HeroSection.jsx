/* eslint-disable */
import React from "react";
import logo from "../../assets/logo.png";
import hero from "../../assets/hero.jpg";
import InputSearch from "../InputSearch/InputSearch";
import Header from "../AppBar/Header";

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
        <Header paginationHidden homeDisplay />
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

export default HeroSection;

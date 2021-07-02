/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import "./styles.scss";
import { HeroSection, HomeDisplay } from "./components/index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from "axios";

//DATA FETCH

const App = () => {
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [starShip, setStarShip] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const allDataFetch = () => {
    const peopleRequest = [];
    const shipRequest = [];
    const planetRequest = [];

    for (let i = 1; i <= 9; i++) {
      peopleRequest.push(fetch("https://swapi.dev/api/people/?page=" + i));
    }

    for (let i = 1; i <= 4; i++) {
      planetRequest.push(fetch("https://swapi.dev/api/planets/?page=" + i));
    }

    for (let i = 1; i <= 4; i++) {
      shipRequest.push(fetch("https://swapi.dev/api/starships/?page=" + i));
    }

    const allResult = [...planetRequest, ...shipRequest, ...peopleRequest];

    Promise.all(allResult)
      .then((res) => Promise.all(res.map((r) => r.json())))
      .then((data) => {
        const totalList = [];
        data.forEach((d) => totalList.push(...d.results));
        console.log(totalList);
        setPlanet(totalList.slice(0, 39));
        setStarShip(totalList.slice(39, 75));
        setPeople(totalList.slice(75));
        setIsLoading(false);
      });
  };

  useEffect(() => {
    allDataFetch();
  }, []);

  if (isLoading) {
    return (
      <main>
        <HeroSection />
        <div className="fallback-container">
          {/* <Loader type="Circles" color="black" height={50} width={50} /> */}
          <h1>...Loading</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <HeroSection />
      {/* <HomeDisplay starShip={starShip} people={people} /> */}
      <HomeDisplay />
    </main>
  );
};

export default App;

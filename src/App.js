/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import "./styles.scss";
import { HeroSection, HomeDisplay } from "./components/index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from "axios";

const App = () => {
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [starShip, setStarShip] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const peopleAPI = "https://swapi.dev/api/people/";
    const planetAPI = "https://swapi.dev/api/planets/";
    const starShipAPI = "https://swapi.dev/api/starships/";

    const getPeople = axios.get(peopleAPI);
    const getPlanet = axios.get(planetAPI);
    const getStarShip = axios.get(starShipAPI);
    axios.all([getPeople, getPlanet, getStarShip]).then(
      axios.spread((...allData) => {
        const allPeople = allData[0].data;
        const allPlanet = allData[1].data;
        const allStarShip = allData[2].data;
        setPeople(allPeople);
        setPlanet(allPlanet);
        setStarShip(allStarShip);
        setIsLoading(false);
      })
    );
  };

  useEffect(() => {
    fetchData();
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
      <HomeDisplay starShip={starShip} people={people} />
    </main>
  );
};

export default App;

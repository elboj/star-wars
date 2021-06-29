/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import "./styles.scss";
import { HeroSection } from "./components/index";
import axios from "axios";

const App = () => {
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [starShip, setStarShip] = useState([]);

  const fetchData = async () => {
    const peopleAPI = "https://swapi.dev/api/people";
    const planetAPI = "https://swapi.dev/api/planets";
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
        console.log(people);
        console.log(planet);
        console.log(starShip);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default App;

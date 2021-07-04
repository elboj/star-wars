/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import "./styles.scss";
import {
  HeroSection,
  HomeDisplay,
  ShipPaginator,
  PeoplePaginator,
  PlanetPaginator,
} from "./components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./components/Paginator/Posts";
import Footer from "./components/Footer/Footer";

const App = () => {
  /**GLOBAL DEFINED STATES
   * ALL STATES ARE USEFUL..
   * DO NOT DELETE
   */

  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [starShip, setStarShip] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hide, setHide] = useState(true);
  const [pg, setPG] = useState(false);
  const [pHide, setPHide] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  //PAGINATION STATES
  const [search, setSearch] = useState("");

  //DATA FETCH
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
        setAllData(totalList);
        setPlanet(totalList.slice(0, 39));
        setStarShip(totalList.slice(40, 75));
        setPeople(totalList.slice(76));
        setIsLoading(false);
      });
  };

  useEffect(() => {
    allDataFetch();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResult(
      allData.filter(
        (data) =>
          data.hasOwnProperty("name") &&
          data.name.toLowerCase() == search.toLowerCase()
      )
    );
    setHide(false);
    setPHide(false);
    setPG(true);
  };

  if (isLoading) {
    return (
      <main>
        <div className="fallback-container">
          <h1>...Loading</h1>
        </div>
      </main>
    );
  }
  return (
    <div>
      <main>
        <Router>
          <HeroSection
            allData={allData}
            setPHide={setPHide}
            setPG={setPG}
            setHide={setHide}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
          <Switch>
            <Route
              path="/"
              exact
              component={() =>
                hide && <HomeDisplay starShip={starShip} people={people} />
              }
            />
            <Route
              path="/people"
              exact
              component={() =>
                pHide && (
                  <PeoplePaginator people={people} setPeople={setPeople} />
                )
              }
            />
            <Route
              path="/ships"
              exact
              component={() => pHide && <ShipPaginator starShip={starShip} />}
            />
            <Route
              path="/planets"
              exact
              component={() => pHide && <PlanetPaginator planet={planet} />}
            />
          </Switch>
        </Router>
        {pg && (
          <Posts
            setHide={setHide}
            setPG={setPG}
            setPHide={setPHide}
            searchResult={searchResult}
          />
        )}
      </main>
    </div>
  );
};

export default App;

/* eslint-disable */
import React from "react";
import { useState, useEffect, useReducer } from "react";
import "./scss/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { reducer } from "./reducer";
import { defaultState } from "./defaultState";
import {
  HeroSection,
  HomeDisplay,
  ShipPaginator,
  PeoplePaginator,
  PlanetPaginator,
} from "./components/index";
import InputSearch from "./components/InputSearch/InputSearch";
import Header from "./components/AppBar/Header";
import Posts from "./components/Paginator/Posts";
import NotFound from "./NotFound";
import StarShipsRM from "./components/Paginator/StarShipsRM";

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [shipName, setShipName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * state.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - state.postsPerPage;

  //FUNCTION THAT CHANGES PAGINATION PAGE
  const handleChange = (event, value) => {
    setCurrentPage(value);
    console.log(event);
  };

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
        dispatch({ type: "DATA_FETCHED", payload: totalList });
      });
  };

  useEffect(() => {
    allDataFetch();
  }, []);

  if (state.isLoading) {
    return (
      <main>
        <div className="fallback-container">
          <h1>...Loading</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Router basename={"/star-wars"}>
        <Header />
        <InputSearch
          search={search}
          setSearch={setSearch}
          setSearchResult={setSearchResult}
          allData={state.allData}
        />
        <HeroSection />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <HomeDisplay
                starShip={state.starShip}
                people={state.people}
                randNumb={state.randNumb}
                setShipName={setShipName}
              />
            )}
          />
          <Route
            path="/people"
            component={() => (
              <PeoplePaginator
                people={state.people}
                // setPeople={setPeople}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                indexOfLastPost={indexOfLastPost}
                indexOfFirstPost={indexOfFirstPost}
                postsPerPage={state.postsPerPage}
                handleChange={handleChange}
                randNumb={state.randNumb}
              />
            )}
          />

          <Route
            path="/ships"
            component={() => (
              <ShipPaginator
                starShip={state.starShip}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                indexOfLastPost={indexOfLastPost}
                indexOfFirstPost={indexOfFirstPost}
                postsPerPage={state.postsPerPage}
                handleChange={handleChange}
                randNumb={state.randNumb}
                setShipName={setShipName}
              />
            )}
          />
          <Route
            path="/planets"
            component={() => (
              <PlanetPaginator
                planet={state.planet}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                indexOfLastPost={indexOfLastPost}
                indexOfFirstPost={indexOfFirstPost}
                postsPerPage={state.postsPerPage}
                handleChange={handleChange}
                randNumb={state.randNumb}
              />
            )}
          />
          <Route
            path="/posts"
            component={() => <Posts searchResult={searchResult} />}
          />
          <Route
            path="/readmore"
            component={() => (
              <StarShipsRM randNumb={state.randNumb} shipName={shipName} />
            )}
          />
          <Route component={() => <NotFound />} />
        </Switch>
      </Router>
      <div>
        <footer>
          <p className="footer-text">Copyright &copy; Oluwatobi Adaja 2021</p>
        </footer>
      </div>
    </main>
  );
};

export default App;

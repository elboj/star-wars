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
import Posts from "./components/Paginator/Posts";
import NotFound from "./NotFound";
// import StarShipsRM from "./components/Paginator/StarShipsRM";

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [rm, setRm] = useState(true);

  //PAGINATION DATA
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * state.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - state.postsPerPage;

  //FUNCTION THAT CHANGES PAGINATION PAGE
  const handleChange = (event, value) => {
    setCurrentPage(value);
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
        setSearchData(totalList);
        dispatch({ type: "DATA_FETCHED", payload: totalList });
      });
  };

  useEffect(() => {
    allDataFetch();
  }, []);

  //images random number
  const randNumb = (x) => {
    return Math.floor(Math.random() * x);
  };

  randNumb();

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
        <HeroSection
          paginationHidden={() => dispatch({ type: "PAGINATION_HIDDEN" })}
          homeDisplay={() => dispatch({ type: "HOME_DISPLAY" })}
        />
        <InputSearch
          search={search}
          setSearch={setSearch}
          searchData={searchData}
          setSearchResult={setSearchResult}
        />
        <Switch>
          <Route
            path="/"
            exact
            component={() =>
              state.hide && (
                <HomeDisplay
                  starShip={state.starShip}
                  people={state.people}
                  randNumb={randNumb}
                />
              )
            }
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
                randNumb={randNumb}
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
                randNumb={randNumb}
                setRm={setRm}
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
                randNumb={randNumb}
              />
            )}
          />
          <Route
            path="/posts"
            component={() => <Posts searchResult={searchResult} />}
          />
          <Route component={() => <NotFound />} />
        </Switch>
        {/* <Route
          path="/readmore"
          exact
          component={() => rm && <StarShipsRM randNumb={randNumb} />}
        /> */}
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

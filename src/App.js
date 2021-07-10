/* eslint-disable */
import React from "react";
import { useState, useEffect, useReducer } from "react";
import "./scss/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { reducer } from "./reducer";
//import { defaultState } from "./defaultState";
import {
  HeroSection,
  HomeDisplay,
  ShipPaginator,
  PeoplePaginator,
  PlanetPaginator,
} from "./components/index";
import Posts from "./components/Paginator/Posts";
import StarShipsRM from "./components/Paginator/StarShipsRM";

const defaultState = {
  people: [],
  planet: [],
  starShip: [],
  allData: [],
  isLoading: true,
  pHide: false,
  pg: false,
  hide: true,
  searchResult: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(defaultState);
  const [rm, setRm] = useState(true);

  //PAGINATION DATA
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPagePerPost] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

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
        dispatch({ type: "DATA_FETCHED", payload: totalList });
      });
  };

  useEffect(() => {
    allDataFetch();
  }, []);

  /**
   * *************************************************************************
   * INTELLIGENT REGEX SEARXH.. THIS FUNCTIONALITY PRODUCES THE CLOSEST RESULTS
   * TO THE USER INPUT IF THERE'S NO EXACT MATCH
   * **************************************************************************
   */

  const checkName = (name, str) => {
    var pattern = str
      .split("")
      .map((x) => {
        return `(?=.*${x})`;
      })
      .join("");
    var regex = new RegExp(`${pattern}`, "g");
    return name.match(regex);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setRm(false);
    if (search.trim() === "") {
      return;
    }
    const newData = state.allData.filter(
      (data) =>
        data.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        checkName(data.name.substring(0, 3), search.substring(0, 3))
    );

    dispatch({ type: "SEARCH_DATA", payload: newData });
  };
  /************************************************************************
   * **********************************************************************
   */

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
          //allData={state.allData}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          paginationHidden={() => dispatch({ type: "PAGINATION_HIDDEN" })}
          homeDisplay={() => dispatch({ type: "HOME_DISPLAY" })}
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
          {/* <Route
            path="/people"
            exact
            component={() =>
              pHide && (
                
              )
            }
          /> */}
          <PeoplePaginator
            people={state.people}
            // setPeople={setPeople}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            indexOfLastPost={indexOfLastPost}
            indexOfFirstPost={indexOfFirstPost}
            postsPerPage={postsPerPage}
            handleChange={handleChange}
            randNumb={randNumb}
          />
          {/* <Route
            path="/ships"
            exact
            component={() =>
              pHide && (
                <ShipPaginator
                  starShip={starShip}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  indexOfLastPost={indexOfLastPost}
                  indexOfFirstPost={indexOfFirstPost}
                  postsPerPage={postsPerPage}
                  handleChange={handleChange}
                  randNumb={randNumb}
                  setRm={setRm}
                />
              )
            }
          />
          <Route
            path="/planets"
            exact
            component={() =>
              pHide && (
                <PlanetPaginator
                  planet={planet}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  indexOfLastPost={indexOfLastPost}
                  indexOfFirstPost={indexOfFirstPost}
                  postsPerPage={postsPerPage}
                  handleChange={handleChange}
                  randNumb={randNumb}
                />
              )
            }
          /> */}
        </Switch>
        {/* <Route
          path="/readmore"
          exact
          component={() => rm && <StarShipsRM randNumb={randNumb} />}
        /> */}
      </Router>
      {state.pg && (
        <Posts
          searchResult={state.searchResult}
          backHome={() => dispatch({ type: "NO_RESULT" })}
        />
      )}
      <div>
        <footer>
          <p className="footer-text">Copyright &copy; Oluwatobi Adaja 2021</p>
        </footer>
      </div>
    </main>
  );
};

export default App;

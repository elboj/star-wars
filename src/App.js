/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import "./styles.scss";
import { HeroSection, HomeDisplay } from "./components/index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PeoplePaginator from "./components/Paginator/PeoplePaginator";
import ShipPaginator from "./components/Paginator/ShipPaginator";
import Posts from "./components/Paginator/Posts";

const App = () => {
  //USE STATES
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [starShip, setStarShip] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hd, setHd] = useState(true);
  const [pg, setPG] = useState(false);

  //PAGINATION STATES
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

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
        // console.log(totalList);
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

  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  // const totalPages = Math.ceil(people.length / postsPerPage);

  const handleSearch = (e) => {
    e.preventDefault();
    search ? setPG(true) : setPG(false);
    // setHd(!hd);
    // if (search === "people") {
    //   setFiltered(allData.filter((data) => data.gender));
    // }
    // if (search === "planets") {
    //   setFiltered(allData.filter((data) => data.climate));
    // }
    // if (search === "ships") {
    //   setFiltered(allData.filter((data) => data.model));
    // }
  };

  if (isLoading) {
    return (
      <main>
        <HeroSection />
        <div className="fallback-container">
          <h1>...Loading</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="test-input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="button">click me</button>
      </form>
      <HeroSection people={people} planet={planet} starShip={starShip} />
      {hd && <HomeDisplay starShip={starShip} people={people} />}
      {/* <PeoplePaginator people={people} /> */}
      {/* <ShipPaginator starShip={starShip} /> */}
      {pg && (
        <Posts
          people={people}
          starShip={starShip}
          search={search}
          setHd={setHd}
          setPG={setPG}
        />
      )}
    </main>
  );
};

export default App;

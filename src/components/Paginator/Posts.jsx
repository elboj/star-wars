import React from "react";
import PeoplePaginator from "./PeoplePaginator";
import ShipPaginator from "./ShipPaginator";

const Posts = ({ people, starShip, search, setHide, setPG, setPHide }) => {
  return (
    <div>
      <h1>Here are the search results</h1>;
      <button
        type="button"
        onClick={() => {
          setHide(true);
          setPHide(true);
          setPG(false);
        }}
      >
        back to home
      </button>
    </div>
  );
  // if (search === "people") {
  //   setHd(false);
  //   return <PeoplePaginator people={people} />;
  // }
  // if (search === "ship") {
  //   setHd(false);
  //   return <ShipPaginator starShip={starShip} />;
  // }
  // // setHd(true);
  // return (
  //   <div>
  //     <h1>No result</h1>
  //     <button type="button" onClick={() => setHd(true) && setPG(false)}>
  //       back to home
  //     </button>
  //   </div>
  // );
};

export default Posts;

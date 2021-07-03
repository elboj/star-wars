import React from "react";
import PeoplePaginator from "./PeoplePaginator";
import ShipPaginator from "./ShipPaginator";

const posts = ({ people, starShip, search, setHd, setPG }) => {
  console.log(setHd);
  if (search === "people") {
    setHd(false);
    return <PeoplePaginator people={people} />;
  }
  if (search === "ship") {
    setHd(false);
    return <ShipPaginator starShip={starShip} />;
  }
  // setHd(true);
  return (
    <div>
      <h1>No result</h1>
      <button type="button" onClick={() => setHd(true) && setPG(false)}>
        back to home
      </button>
    </div>
  );
};

export default posts;

// if (search === "people") {
//     return (
//       <div>
//         <PeoplePaginator people={people} />
//         <h1>looking good</h1>
//       </div>
//     );
//   }
//   )

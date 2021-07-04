import React from "react";
import "../../scss/_peopleFiltered.scss";
import { gender } from "./gender";

const PeopleFiltered = ({ categories, filterItems }) => {
  // console.log(gender);
  return (
    <div className="btn-container">
      {gender.map((people, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(people)}
          >
            {people}
          </button>
        );
      })}
    </div>
  );
};

export default PeopleFiltered;

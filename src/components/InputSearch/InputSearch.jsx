import React from "react";
import { GoSearch } from "react-icons/go";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../context";

function InputSearch({ search, setSearch, handleSearch }) {
  const data = useGlobalContext();
  console.log(data);
  const history = useHistory();
  const handleSearched = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      throw new Error("invalid string");
    }
  };
  return (
    <div className="main-hero-input">
      <form className="mhi-form" onSubmit={handleSearched}>
        <button type="submit" className="mhi-button">
          <GoSearch size="1.2rem" />
        </button>
        <input
          required
          type="text"
          name="myInput"
          className="mhi-field"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default InputSearch;

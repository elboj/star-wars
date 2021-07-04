import React from "react";
import { GoSearch } from "react-icons/go";

function InputSearch({ search, setSearch, handleSearch }) {
  return (
    <div className="main-hero-input">
      <form className="mhi-form" onSubmit={handleSearch}>
        <button className="mhi-button">
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

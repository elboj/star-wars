import React from "react";
import { GoSearch } from "react-icons/go";
import { useHistory } from "react-router";
import "../../scss/partials/_input.scss";

function InputSearch({ search, setSearch, setSearchResult, allData }) {
  const history = useHistory();

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

  const handleSearched = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      throw new Error("invalid string");
    }
    const newData = allData.filter(
      (data) =>
        data.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        checkName(data.name.substring(0, 3), search.substring(0, 3))
    );
    setSearchResult(newData);
    history.push("/posts");
    setSearch("");
  };

  return (
    <section className="input-container">
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
    </section>
  );
}

export default InputSearch;

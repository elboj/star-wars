import React from "react";
import { useReducer } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";
// import { reducer } from "../../reducer";
//import { defaultState } from "../../defaultState";

// export const defaultState = {
//   people: [],
//   planet: [],
//   starShip: [],
//   allData: [],
//   isLoading: true,
//   pHide: false,
//   pg: false,
//   hide: true,
//   searchResult: [],
// };

function Header({ setHide, paginationHidden, homeDisplay }) {
  return (
    <div>
      <AppBar position="fixed" className="app-bar" color="secondary">
        <Toolbar>
          <Link to="/">
            <Typography onClick={homeDisplay}>
              <img src={logo} alt="star-wars" height="35px" />
            </Typography>
          </Link>
          <div className="grow"></div>
          <Link to="/people">
            <Typography
              className="link-text"
              variant="subtitle2"
              onClick={paginationHidden}
            >
              People
            </Typography>
          </Link>
          <Link to="/ships">
            <Typography
              variant="subtitle2"
              className="link-text"
              onClick={paginationHidden}
            >
              Ships
            </Typography>
          </Link>
          <Link to="/planets">
            <Typography
              variant="subtitle2"
              className="link-text"
              onClick={paginationHidden}
            >
              Planets
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);

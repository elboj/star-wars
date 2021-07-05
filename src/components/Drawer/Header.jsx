import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header({ setHide, setPHide, setPG }) {
  return (
    <div>
      <AppBar position="fixed" className="app-bar" color="secondary">
        <Toolbar>
          <Link to="/home">
            <Typography
              onClick={() => {
                setHide(true);
                setPG(false);
              }}
            >
              <img src={logo} alt="star-wars" height="35px" />
            </Typography>
          </Link>
          <div className="grow"></div>
          <Link to="/people">
            <Typography
              className="link-text"
              variant="subtitle2"
              onClick={() => {
                setPHide(true);
                setPG(false);
              }}
            >
              People
            </Typography>
          </Link>
          <Link to="/ships">
            <Typography
              variant="subtitle2"
              className="link-text"
              onClick={() => {
                setPHide(true);
                setPG(false);
              }}
            >
              Ships
            </Typography>
          </Link>
          <Link to="/planets">
            <Typography
              variant="subtitle2"
              className="link-text"
              onClick={() => {
                setPHide(true);
                setPG(false);
              }}
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

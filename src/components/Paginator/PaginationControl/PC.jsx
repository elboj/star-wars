import React from "react";
import { Container } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import "../../../scss/_pc.scss";
import useStyles from "./styles";

function PC({ totalPages, currentPage, handleChange }) {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.pControl}>
      <div>
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
}

export default PC;

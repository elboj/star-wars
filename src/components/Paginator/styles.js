import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  planetCard: {
    display: "flex",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      height: "auto !important",
      width: "300px",
    },
  },
  planetMedia: {
    display: "flex",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      height: "auto !important",
      width: "300px",
    },
  },
}));

export default useStyles;

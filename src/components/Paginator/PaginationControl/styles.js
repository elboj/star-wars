import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pControl: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    boxShadow: "none",
    // [theme.breakpoints.down("xs")]: {
    //   height: "auto !important",
    //   width: "300px",
    // },
  },
}));

export default useStyles;

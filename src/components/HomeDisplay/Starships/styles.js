import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.5rem 0",
  },
  sectionHeading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
}));

export default useStyles;

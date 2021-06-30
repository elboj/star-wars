import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
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

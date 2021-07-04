import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3.5rem 0",
    [theme.breakpoints.down("sm")]: {
      padding: "0.7rem 0",
    },
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
  sectionUnderline: {
    width: 200,
    height: 3,
    background: "black",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 3,
    marginTop: 3,
  },
}));

export default useStyles;

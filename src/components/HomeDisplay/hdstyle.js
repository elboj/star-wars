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
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // border: "2px solid red",
    paddingTop: "2rem",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: 0,
    paddingTop: "80.25%", // 16:9, 56.25
    marginTop: "30",
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "black",
  },
  btnHolder: {
    // border: "2px solid green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "3rem 0",
  },
  rmButton: {
    width: "70%",
    border: "2px solid black",
  },
}));

export default useStyles;

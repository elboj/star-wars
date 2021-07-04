import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  peopleCard: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export default useStyles;

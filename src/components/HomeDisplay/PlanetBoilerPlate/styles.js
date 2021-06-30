import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mediaCaption: {
    border: "2px solid yellow",

    [theme.breakpoints.down("sm")]: {
      border: "2px solid green",
      fontSize: "1rem !important",
      paddingBottom: "1.5rem !important",
    },
  },

  media: {
    [theme.breakpoints.down("sm")]: {
      height: "290px !important",
    },
  },

  banner: {
    [theme.breakpoints.down("sm")]: {
      height: "auto !important",
    },
  },
}));

export default useStyles;

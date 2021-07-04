import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mediaCaption: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem !important",
      paddingBottom: "1.5rem !important",
    },
  },

  media: {
    [theme.breakpoints.down("sm")]: {
      height: "290px !important",
      border: "2px solid red",
    },
  },

  banner: {
    backgroundColor: "transparent",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      height: "auto !important",
    },
  },

  planetCard: {
    display: "flex",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      height: "auto !important",
      width: "auto",
    },
  },
}));

export default useStyles;

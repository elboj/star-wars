import React from "react";
import "../../scss/_footer.scss";
import { BottomNavigation } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="footer-text">Copyright &copy; Your Website 2020</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

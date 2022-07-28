import React from "react";
import "./Quote.scss";
// import Navbar from "../../components/Navbar/Navbar";
// import Sidebar from "../../components/Sidebar/Sidebar";
//import { motion } from "framer-motion";

const Quote = () => {
  return (
    <div className="container">
      <div className="quote">
        <div className="wrapper">
          <div className="quote-wrapper">
            <p>
              IF YOUR <span>LIMITATION</span> <br />
              BECOMES <span>IMAGINATION</span>, <br />
              LIFE WILL BE <span>LIMITLESS</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

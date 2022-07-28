import React from "react";
import "./Navbar.scss";
import { GrSun, GrMenu } from "react-icons/gr";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100px" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 3, delay: 3 }}
      className="navbar"
    >
      <div className="navbar-greeting">
        <GrSun className="navbar-icon" />
        <p>Good Morning</p>
      </div>
      <div className="navbar-menu">
        Menu <GrMenu className="navbar-icon" />
      </div>
    </motion.div>
  );
};

export default Navbar;

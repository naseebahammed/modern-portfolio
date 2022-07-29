//import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import { motion } from "framer-motion";
//climport { BrowserRouter, Link } from "react-router-dom";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrGithub,
} from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3 }}
        className="sidebar-count"
      >
        01
      </motion.div> */}
      <motion.ul
        initial={{ opacity: 0, x: "-100px" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 3, delay: 3 }}
        className="sidebar-social"
      >
        <a href="https://www.facebook.com/naseeb.nas.9849" target="_blank">
          <li>
            <GrFacebookOption />
          </li>
        </a>
        <a href="https://www.instagram.com/returnd_martian/" target="_blank">
          <li>
            <GrInstagram />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/naseeb-ahammed/" target="_blank">
          <li>
            <GrLinkedinOption />
          </li>
        </a>
        <a href="https://github.com/naseebahammed/" target="_blank">
          <li>
            <GrGithub />
          </li>
        </a>
      </motion.ul>
    </div>
  );
};

export default Sidebar;

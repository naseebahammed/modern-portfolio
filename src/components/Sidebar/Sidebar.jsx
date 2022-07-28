//import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import { motion } from "framer-motion";

import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrGithub,
} from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3 }}
        className="sidebar-count"
      >
        01
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, x: "-100px" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 3, delay: 3 }}
        className="sidebar-social"
      >
        <li>
          <GrFacebookOption />
        </li>
        <li>
          <GrInstagram />
        </li>

        <li>
          <GrLinkedinOption />
        </li>
        <li>
          <GrGithub />
        </li>
      </motion.ul>
    </div>
  );
};

export default Sidebar;

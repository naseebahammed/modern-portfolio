import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="home">
        <div className="home-text">
          <div className="home-claw_up">
            <motion.img
              initial={{ opacity: 0, y: "300%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 3, delay: 1 }}
              src={process.env.PUBLIC_URL + "img/claw-shadow.png"}
              alt=""
              className="home-claw_img"
            />
          </div>
          <motion.div
            className="home-text_item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 2 }}
          >
            <div className="home-text_name">
              NASEEB <span>AHAMMED</span>
            </div>
            <h4>Front-end Developer</h4>
            <p>I do coding, that’s how I communicate with computer</p>
          </motion.div>
          <div className="home-claw_down">
            <motion.img
              initial={{ opacity: 0, y: "-300%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 3, delay: 1 }}
              src={process.env.PUBLIC_URL + "img/claw-up-shadow.png"}
              className="home-claw_img"
              alt=""
            />
          </div>
        </div>
        <div className="home-image">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 2 }}
            src={process.env.PUBLIC_URL + "img/spaceman.png"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

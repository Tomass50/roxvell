import React from "react";
import styles from "../../../../../styles/header.module.css";
import { style } from "motion";

const NavListMobile = () => {
  return (
    <ul className={styles["burger-menu-list"]}>
      <li className={styles["burger-text"]}>
        <a href="#achiv-section">Home</a>
      </li>
      <li className={styles["burger-text"]}>
        <a href="#about-section">About Us</a>
      </li>
      <li className={styles["burger-text"]}>
        <a href="#com-section">Contact Us </a>
      </li>
      <li className={styles["burger-text"]}>
        <a href="#order-section">Our Locations</a>
      </li>
    </ul>
  );
};

export default NavListMobile;

import React, { useState } from "react";
import Logo from "@/forms/assets/Logo.svg";
import Image from "next/image";
import styles from "@/styles/footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <p className={styles["phone"]}>+38063-23-23-23</p>
      <h3 className={styles["header"]}>
        Lorem ipsum dolor sit amet consectetur.
      </h3>
      <div className={styles["logo-container"]}></div>
    </div>
  );
};

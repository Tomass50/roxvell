import React, { useState, useEffect } from "react";
import styles from "@/styles/header.module.css";

const HeaderNavMenu = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (activeSection) {
      const targetSection = document.getElementById(activeSection);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [activeSection]);

  const handleNavItemClick =
    ({ sectionId }: any) =>
    ({ e }: any) => {
      e.preventDefault();
      setActiveSection(sectionId);
    };

  return (
    <ul className={styles["context-menu-container"]}>
      <li className={styles["menu-items"]}>
        <a href="#achiv-section" onClick={handleNavItemClick("achiv-section")}>
          home
        </a>
      </li>
      <li className={styles["menu-items"]}>
        <a href="#about-section" onClick={handleNavItemClick("about-section")}>
          about us
        </a>
      </li>
      <li className={styles["menu-items"]}>
        <a href="#order-section" onClick={handleNavItemClick("order-section")}>
          contact
        </a>
      </li>
      <li className={styles["menu-items"]}>
        <a href="#com-section" onClick={handleNavItemClick("com-section")}>
          our location
        </a>
      </li>
    </ul>
  );
};

export default HeaderNavMenu;

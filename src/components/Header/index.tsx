import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/header.module.css";
import HeaderMobile from "./components/layouts/HeaderMobile";
import HeaderDesktop from "./components/layouts/HeaderDesktop";
import Container from "../Container";
import Logo from "./components/layouts/Logo";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${styles["header-container"]} ${
        isScrolled ? styles["scrolled"] : ""
      }`}
    >
      <Container>
        <div className={styles["header-content"]}>
          <Logo />
          <HeaderDesktop />
          <HeaderMobile />
        </div>
      </Container>
    </header>
  );
};

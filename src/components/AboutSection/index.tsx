import React from "react";
import stylesAbout from "@/styles/section.module.css";
import Title from "../Title";
import AboutText from "./components/AboutText";

const AboutSection = () => {
  return (
    <div>
      <Title className={stylesAbout["header"]}>
        Lorem ipsum dolor sit amet consectetur.
      </Title>
      <AboutText />
    </div>
  );
};

export default AboutSection;

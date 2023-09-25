import React from "react";
import stylesAchiv from "@/styles/achiv.module.css";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const AchivContainer = () => {
  return (
    <div className={stylesAchiv[".achiv-container"]}>
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default AchivContainer;

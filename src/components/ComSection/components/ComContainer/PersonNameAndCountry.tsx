import React from "react";
import stylesCom from "@/styles/comment.module.css";

const PersonNameAndCountry = ({ name, city }: any) => {
  return (
    <div className={stylesCom["name-container"]}>
      <p className={stylesCom["name"]}>{name}</p>
      <p className={stylesCom["country-city"]}>{city}</p>
    </div>
  );
};

export default PersonNameAndCountry;

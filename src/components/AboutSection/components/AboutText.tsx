import React from "react";
import stylesAbout from "@/styles/section.module.css";

const AboutText = () => {
  return (
    <div className={stylesAbout["text-container"]}>
      <p className={stylesAbout["text"]}>
        Lorem ipsum dolor sit amet consectetur. Ac cursus posuere etiam commodo
        pellentesque. Aliquet non amet et nulla maecenas cras sit laoreet
        egestas.
      </p>
    </div>
  );
};

export default AboutText;

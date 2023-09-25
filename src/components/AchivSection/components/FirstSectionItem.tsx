import React from "react";
import stylesAchiv from "@/styles/achiv.module.css";

const FirstSectionItem = () => {
  return (
    <div className={stylesAchiv["first-section"]}>
      <div className={stylesAchiv["icon-container"]}>
        <div className={stylesAchiv["icon"]}></div>
      </div>
      <h3 className={stylesAchiv["header-achiv"]}>
        Lorem ipsum dolor sit amet consectetur.
      </h3>
      <p className={stylesAchiv["text-achiv"]}>
        Lorem ipsum dolor sit amet consectetur. Et donec ipsum quam est
        venenatis nisl turpis aliquam sed.
      </p>
    </div>
  );
};

export default FirstSectionItem;

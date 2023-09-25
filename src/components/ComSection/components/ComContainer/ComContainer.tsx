import React from "react";
import stylesCom from "@/styles/comment.module.css";
import ComHeader from "./ComHeader";
import ComText from "./ComText";
import PersonImg from "./PersonImg";
import PersonNameAndCountry from "./PersonNameAndCountry";

const ComContainer = ({ data }: any) => {
  return (
    <div className={stylesCom["comment"]}>
      <ComHeader title={data?.title} />
      <ComText text={data?.text} />
      <div className={stylesCom["person-container"]}>
        <PersonImg screenshot={data?.screenshot} />
        <PersonNameAndCountry name={data?.name} city={data?.city} />
      </div>
    </div>
  );
};

export default ComContainer;

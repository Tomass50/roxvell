import React from "react";
import stylesCom from "@/styles/comment.module.css";

const ComHeader = ({ title }: any) => {
  return <h3 className={stylesCom["comment-header"]}>{title}</h3>;
};

export default ComHeader;

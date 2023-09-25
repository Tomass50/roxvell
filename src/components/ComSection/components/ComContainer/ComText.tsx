import React from "react";
import stylesCom from "@/styles/comment.module.css";

const ComText = ({ text }: any) => {
  return <p className={stylesCom["comment-text"]}>{text}</p>;
};

export default ComText;

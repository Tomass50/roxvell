import React from "react";
import stylesCom from "@/styles/comment.module.css";
import Img from "../../../../forms/assets/person1.svg";
import Image from "next/image";

const PersonImg = ({ screenshot }: any) => {
  return (
    <div className={stylesCom["person-img"]}>
      <Image src={screenshot} alt="" width={34} height={34} />
    </div>
  );
};

export default PersonImg;

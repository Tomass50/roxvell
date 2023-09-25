import React, { useEffect, useState } from "react";
import Image from "next/image";
import stylesHeader from "@/styles/header.module.css";
import Src from "../../../../forms/assets/Logo.svg";

const Logo = () => {
  return (
    <div className={stylesHeader["logo-container"]}>
      <Image src={Src} className="" alt="" />
    </div>
  );
};

export default Logo;

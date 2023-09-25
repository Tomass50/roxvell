import React from "react";
import stylesHeader from "@/styles/header.module.css";
import HeaderNavMenu from "@/components/Header/components/layouts/HeaderDesktop/components/HeaderNavMenu";

const HeaderDesktop = () => {
  return (
    <>
      <HeaderNavMenu />
      <div className={stylesHeader["flex"]}></div>
    </>
  );
};

export default HeaderDesktop;

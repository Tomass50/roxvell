import React, { HTMLInputTypeAttribute } from "react";
import { FormEvent, useState } from "react";
import stylesMain from "@/styles/main.module.css";
import stylesAchiv from "@/styles/achiv.module.css";
import stylesOrder from "@/styles/order.module.css";
import stylesAbout from "@/styles/section.module.css";
import stylesCom from "@/styles/comment.module.css";
import Image from "next/image";
import Ship from "../forms/assets/Ship.png";
import Delivery from "../forms/assets/Screen3.svg";
import Cargo from "../forms/assets/screen5.svg";
import AchivSection from "@/components/AchivSection";
import OrderSection from "@/components/OrderSection";
import AboutSection from "@/components/AboutSection";
import ComSection from "@/components/ComSection";
import Container from "@/components/Container";

export default function FirstPage() {
  return (
    <main>
      <Container>
        <div className={stylesMain["screen-container"]}></div>
        <div id="achiv-section" className={stylesAchiv["main-container"]}>
          <AchivSection />
        </div>
        <div id="order-section" className={stylesOrder["main-container"]}>
          <Image
            objectFit="cover"
            className={stylesOrder["image-ship"]}
            src={Ship}
            alt="Ship"
          />
          <OrderSection />
        </div>
        <div id="about-section" className={stylesAbout["main-container"]}>
          <AboutSection />
          <Image
            objectFit="cover"
            className={stylesAbout["image-delivery"]}
            src={Delivery}
            alt="Delivery"
          />
        </div>
        <div id="com-section" className={stylesCom["main-container"]}>
          <ComSection />
          <Image
            objectFit="cover"
            className={stylesCom["image-cargo"]}
            src={Cargo}
            alt="Cargo"
          />
        </div>
      </Container>
    </main>
  );
}

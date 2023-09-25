import React from "react";
import stylesAchiv from "@/styles/achiv.module.css";
import Title from "../Title";
import AchivContainer from "./components/AchivContainer";
import FirstSection from "./components/FirstSection";
import FirstSectionItem from "./components/FirstSectionItem";
import SecondSection from "./components/SecondSection";
import { motion } from "framer-motion";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0, y: 100 },
};
const AchivSection = () => {
  return (
    <>
      <Title className={stylesAchiv[".header-text-container "]}>
        <h2 className={stylesAchiv["header"]}>
          Lorem ipsum dolor sit amet <br /> consectetur.
        </h2>
        <p className={stylesAchiv["text"]}>
          Lorem ipsum dolor sit amet consectetur. Nunc mauris in laoreet risus.
        </p>
      </Title>
      <motion.section
        transition={{ staggerChildren: 0.3, when: "beforeChildren" }}
        className={stylesAchiv["achiv-container"]}
      >
        {[0].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={variants}
            initial={"hidden"}
            whileInView={"visible"}
            className={stylesAchiv["container"]}
            viewport={{ once: true }}
          >
            <AchivContainer key={i} />
          </motion.div>
        ))}
      </motion.section>
    </>
  );
};

export default AchivSection;

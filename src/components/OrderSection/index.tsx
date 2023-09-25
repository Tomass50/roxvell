import React from "react";
import stylesOrder from "@/styles/order.module.css";
import Title from "../Title";
import Form from "./components/Form";
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
const OrderSection = () => {
  return (
    <motion.section
      transition={{ staggerChildren: 0.3, when: "beforeChildren" }}
    >
      {[0].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={variants}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <div>
            <Title className={stylesOrder["header-text-container"]}>
              <h3 className={stylesOrder["header"]}>
                Lorem ipsum dolor sit amet <br /> consectetur.
              </h3>
              <p className={stylesOrder["text"]}>
                Lorem ipsum dolor sit amet consectetur. Nunc fusce sit volutp at{" "}
                <br />
                lectus felis dapibus diam. Imperdiet libero vel ultrices ut nibh
                mi.
              </p>
            </Title>
            <Form />
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default OrderSection;

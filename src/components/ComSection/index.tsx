import React from "react";
import stylesCom from "@/styles/comment.module.css";
import Title from "../Title";
import ComContainer from "./components/ComContainer/ComContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const commentData = [
  {
    title: "Заголовок отзыва 1",
    text: "Текст",
    screenshot: "/comment/Person1.svg",
    name: "Имя Фамилия",
    city: "Город и Страна",
  },
  {
    title: "Заголовок отзыва 2",
    text: "Текст",
    screenshot: "/comment/Person2.svg",
    name: "Имя Фамилия",
    city: "Город и Страна",
  },
  {
    title: "Заголовок отзыва 3",
    text: "Текст",
    screenshot: "/comment/Person3.svg",
    name: "Имя Фамилия",
    city: "Город и Страна",
  },
];

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
const ComSection = () => {
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
          <div className={stylesCom["section"]}>
            <Title className={stylesCom["header"]}>
              Lorem ipsum dolor sit amet consectetur.
            </Title>
            {commentData.map((item, idx) => {
              return <ComContainer data={item} />;
            })}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ComSection;

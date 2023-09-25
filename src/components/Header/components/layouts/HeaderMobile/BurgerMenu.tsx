import styles from "../../../../../styles/header.module.css";
import { motion } from "framer-motion";
import NavListMobile from "@/components/Header/components/layouts/HeaderMobile/NavListMobile";

type Props = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

export const BurgerMenu = ({ isMenuOpen, toggleMenu }: Props) => {
  return (
    <motion.div
      animate={{ left: isMenuOpen ? "50%" : "100%" }}
      className={styles["menu-container"]}
    >
      <motion.div
        animate={{ right: isMenuOpen ? "100%" : "300%" }}
        className={styles["overlay-close"]}
        onClick={toggleMenu}
      />
      <NavListMobile />
    </motion.div>
  );
};

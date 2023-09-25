import { motion } from "framer-motion";
import styles from "../../../../../styles/header.module.css";

type Props = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

export const Burger = ({ toggleMenu, isMenuOpen }: Props) => {
  return (
    <div className={styles["burger-menu"]} onClick={toggleMenu}>
      <motion.div
        animate={{ y: isMenuOpen ? 6 : 0, rotate: isMenuOpen ? -45 : 0 }}
        className={styles["bar"]}
        transition={{ rotate: { delay: isMenuOpen ? 0.3 : 0 } }}
      />
      <motion.div
        animate={{ opacity: isMenuOpen ? 0 : 1 }}
        className={styles["bar"]}
      />
      <motion.div
        animate={{ y: isMenuOpen ? -6 : 0, rotate: isMenuOpen ? 45 : 0 }}
        className={styles["bar"]}
        transition={{ rotate: { delay: isMenuOpen ? 0.3 : 0 } }}
      />
    </div>
  );
};

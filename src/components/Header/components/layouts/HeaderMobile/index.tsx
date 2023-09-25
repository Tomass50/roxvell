import React, { useEffect } from "react";
import { Burger } from "@/components/Header/components/layouts/HeaderMobile/Burger";
import { BurgerMenu } from "@/components/Header/components/layouts/HeaderMobile/BurgerMenu";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("disable-scroll", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default HeaderMobile;

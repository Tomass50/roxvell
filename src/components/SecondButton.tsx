import { Inter } from "next/font/google";
import style from "@/styles/button.module.css";
import Image from "next/image";
import { useId } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  btnText: string;
  onClick?: any;
};

export default function Button({ btnText, onClick }: Props) {
  return (
    <button className={style["btn-container-second"]} onClick={onClick}>
      {btnText}
    </button>
  );
}

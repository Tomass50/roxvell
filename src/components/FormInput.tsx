import { Inter } from "next/font/google";
import Image from "next/image";
import { type } from "os";
import { useId } from "react";
import styles from "@/styles/input.module.css";
import { InputType } from "zlib";
import { HTMLInputTypeAttribute } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  labelText: string;
  placeholder: string;
  typeInput: HTMLInputTypeAttribute;
  inputMode?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export default function FormInput({
  labelText,
  typeInput,
  placeholder,
  inputMode,
  value,
  onChange,
  className,
  name,
}: Props) {
  const id = useId();

  const inputStyles = ` ${styles["input-container"]} ${className} `;
  return (
    <div className={styles["container"]}>
      <label className={styles["label-text"]} htmlFor={id}>
        {labelText}
      </label>
      <input
        autoComplete=""
        className={inputStyles}
        placeholder={placeholder}
        id={id}
        type={typeInput}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}


import React, { HTMLInputTypeAttribute } from "react";
import { FormEvent, useState } from "react";
import stylesOrder from "@/styles/order.module.css";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";

type Input = {
  labelText: string;
  placeholder: string;
  typeInput: HTMLInputTypeAttribute;
  className: string;
  name: string;
};

const INPUTS: Input[] = [
  {
    labelText: "First Name",
    placeholder: "First Name",
    typeInput: "text",
    className: "shorten-input",
    name: "firstName",
  },
  {
    labelText: "Last Name",
    placeholder: "Last Name",
    typeInput: "text",
    name: "lastName",
    className: "shorten-input",
  },
  {
    labelText: "Email",
    placeholder: "Email",
    typeInput: "email",
    className: "shorten-input",
    name: "email",
  },
  {
    labelText: "Telephone",
    placeholder: "Telephone",
    typeInput: "tel",
    className: "shorten-input",
    name: "telephone",
  },
];
type SubmitObj = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  [key: string]: string;
};

const Form = () => {
  const [submitFormObj, setSubmitFormObj] = useState<SubmitObj>({
    email: "",
    firstName: "",
    lastName: "",
    telephone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;

    setSubmitFormObj((prev) => ({ ...prev, [key]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(submitFormObj);
  };

  return (
    <form onSubmit={handleSubmit} className={stylesOrder["input-container"]}>
      {INPUTS.map(({ className, labelText, placeholder, typeInput, name }) => {
        return (
          <FormInput
            key={name}
            labelText={labelText}
            placeholder={placeholder}
            typeInput={typeInput}
            className={className}
            name={name}
            onChange={handleChange}
            value={submitFormObj[name]}
          />
        );
      })}
      <div className={stylesOrder["btn-container"]}>
        <Button btnText="Button" />
      </div>
    </form>
  );
};

export default Form;

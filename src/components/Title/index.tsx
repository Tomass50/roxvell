import React from "react";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};
const Title = ({ children, className }: TitleProps) => {
  return <h2 className={className}>{children}</h2>;
};

export default Title;

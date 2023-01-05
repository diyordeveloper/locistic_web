import React from "react";
import "./style.css";

interface InputTextProps {
  onChange?(e?: React.FormEvent<HTMLSelectElement>): void;
  value?: string;
  placeholder?: string;
  style?: object;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
  children?: any;
  key?: any;
}
const InputText = ({
  onChange,
  value,
  placeholder,
  style,
  disabled,
  className,
  id,
  name,
  children,
  key,
}: InputTextProps) => {
  return (
    <>
      <select
        name={name}
        className={`${className} Select `}
        id={id}
        onChange={onChange}
        key={key}
      >
        {children}
      </select>
    </>
  );
};

export default InputText;

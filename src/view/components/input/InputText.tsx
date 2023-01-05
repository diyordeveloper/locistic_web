import React from "react";
import "./style.css";

interface InputTextProps {
  onChange?(e?: React.FormEvent<HTMLInputElement>): void;
  value?: string;
  placeholder?: string;
  style?: object;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
  defaultValue?: string;
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
  defaultValue,
}: InputTextProps) => {
  return (
    <>
      <input
        type={"text"}
        style={style}
        className={`${className} InputText`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        id={id}
        name={name}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default InputText;

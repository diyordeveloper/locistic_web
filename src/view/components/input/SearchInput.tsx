import React from "react";
import "./style.css";
import Search from "../../assets/icons/Search.svg";

interface SearchInputProps {
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
const SearchInput = ({
  onChange,
  value,
  placeholder,
  style,
  disabled,
  className,
  id,
  name,
  defaultValue,
}: SearchInputProps) => {
  return (
    <>
      <div className="search__">
        <img src={Search} alt="Error..." />
        <input type="text" placeholder={placeholder} />
      </div>
    </>
  );
};

export default SearchInput;

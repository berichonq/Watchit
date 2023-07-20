import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useState } from "react";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(value)
      setValue("");
    }
  }

  function handleChange(e) {
    setValue(e.target.value)
  }
  
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input className={s.input} type="text" placeholder="Find a movie" onKeyUp={submit} value={value} onChange={handleChange}/>
    </>
  );
}

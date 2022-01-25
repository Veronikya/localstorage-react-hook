import { useState,useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
export default function Form1(){
    const [name, setName] = useLocalStorage("name", "");
    console.log()
  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit"></input>
    </form>
  );
}

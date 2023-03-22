import React, { useRef } from "react";
import Student from "./Student";

export const App = () => {
  let inputRef = useRef(null);
  const inputVal = () => {
    inputRef.current.value = "100";
    inputRef.current.style.color = "red";
  };
  return (
    <>
      <Student ref={inputRef} />
      <button onClick={inputVal}>Update Ref</button>
    </>
  );
};

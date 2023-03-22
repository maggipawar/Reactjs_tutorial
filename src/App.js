import React, { useRef } from "react";

export const App = () => {
  let inputRef = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    let inputv = document.getElementById("input2").value;
    console.log(inputv);
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" ref={inputRef} /> <br /> <br />
        <input type="text" id="input2" /> <br /> <br />
        <button type="submit">Update Val</button>
      </form>
    </>
  );
};

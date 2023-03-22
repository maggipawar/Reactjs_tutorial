import React, { useState } from "react";
export const App = () => {
  return (
    <>
      <h1>HOC component</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </>
  );
};

const HOCRed = (props) => {
  return (
    <>
      <h2 style={{ backgroundColor: "red", width: "100px" }}>
        <props.cmp />
      </h2>
    </>
  );
};

const HOCGreen = (props) => {
  return (
    <>
      <h2 style={{ backgroundColor: "green", width: "100px" }}>
        <props.cmp />
      </h2>
    </>
  );
};

const HOCBlue = (props) => {
  return (
    <>
      <h2 style={{ backgroundColor: "blue", width: "100px" }}>
        <props.cmp />
      </h2>
    </>
  );
};

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </>
  );
};

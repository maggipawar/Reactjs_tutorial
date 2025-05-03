import { useContext } from "react";
import { Context } from "./ContextApi";

export const HComp = () => {
  const subject = useContext(Context);
  return (
    <>
      <h1>H component</h1>
      <p>Learning:{subject}</p>
    </>
  );
};

import { useContext } from "react";
import { DComp } from "./DComp";
import { Context } from "./ContextApi";

export const CComp = () => {
  const subject = useContext(Context);
  return (
    <>
      <h1>C component</h1>
      <p>Hello:{subject}</p>
      <DComp />
    </>
  );
};

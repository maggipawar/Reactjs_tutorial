import React, { forwardRef } from "react";

const Student = (props, ref) => {
  return (
    <>
      <h1>Student component</h1>
      <input type="text" ref={ref} />
    </>
  );
};

export default forwardRef(Student);

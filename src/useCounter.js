import { useState } from "react";

const useCounter = (min = 0, max = 10) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => Math.min(prev + 1, max));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - 1, min));
  };
  return {
    count,
    increment,
    decrement,
    isMin: count === min,
    isMax: count === max,
  };
};

export default useCounter;

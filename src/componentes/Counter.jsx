import CounterDisplay from "./CounterDisplay";
import { useState } from "react";

export function Counter({ initialValue = 0, sum = 1, rest = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  function handleSum() {
    setCounter((c) => c + sum);
  }
  function handleRest() {
    setCounter((c) => c - rest);
  }
  function handleReset() {
    setCounter(initialValue);
  }
  return (
    <div>
      <CounterDisplay counter={counter} />
      <div>
        <button onClick={handleSum}>Sum</button>
        <button onClick={handleRest}>Rest</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
export default Counter;

//With this version the updates will be better

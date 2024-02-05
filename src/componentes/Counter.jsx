import CounterDisplay from "./CounterDisplay";
import { useEffect, useState, useRef } from "react";

export function Counter({ initialValue = 0, sum = 1, rest = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const [prevDirection, setPrevDirection] = useState('');
  const mountedRef = useRef(false);
  const direction = useRef(null);
  function handleSum() {
    setCounter((c) => c + sum);
    direction.current = "up";
  }
  function handleRest() {
    setCounter((c) => c - rest);
    direction.current = "down";
  }
  function handleReset() {
    setCounter(initialValue);
  }
  useEffect(() => {
    console.log(`The counter it's currently ${counter}`);
    if (direction.current !== prevDirection) {
      console.log(direction.current);
      setPrevDirection(direction.current);
    }
  }, [counter]);

  return (
    <div>
      <CounterDisplay counter={counter} />
      <div>
        <button ref={direction} onClick={handleSum}>
          Sum
        </button>
        <button ref={direction} onClick={handleRest}>
          Rest
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
export default Counter;

//With this version the updates will be better

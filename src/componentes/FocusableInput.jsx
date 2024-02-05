import { useEffect } from "react";
import { useRef } from "react";

export function FocusableInput() {
  const mountedRef = useRef(false);
  const focusableInput = useRef(null);
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current=true;
      console.log("First time mounted");
    } else {
      console.log("Else");
    }
    focusableInput.current?.focus();
  }, []);
  return (
    <div>
      <input ref={focusableInput} placeholder="This input is focused" />
    </div>
  );
}
export default FocusableInput;

import { useEffect } from "react";
import { useRef } from "react";

export function FocusableInput(){
    const focusableInput=useRef(null);
    useEffect(()=>{
        focusableInput.current?.focus();
    },[]);
    return(
        <div>
            <input ref={focusableInput} placeholder="This input is focused"/>
        </div>
    )
}
export default FocusableInput;
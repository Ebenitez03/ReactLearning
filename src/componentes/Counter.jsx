import { useState } from "react";


export function Counter(){
    const [counter, setCounter]= useState(0);
    function handleSum(){
        setCounter(counter+1);
    }
    return(
        <div>
            <button onClick={handleSum}><h2>{counter}</h2></button>
        </div>
    );
}
export default Counter;
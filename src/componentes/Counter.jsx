import { useState } from "react";


export function Counter(){
    const [counter, setCounter]= useState(0);
    function handleSum(){
        setCounter(counter+1);
    }
    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={handleSum}>Sum</button>
        </div>
    );
}
export default Counter;
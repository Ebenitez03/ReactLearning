import { useState } from "react";


export function Counter(){
    const [counter, setCounter]= useState(0);
    function handleSum(){
        setCounter((c)=>c+1);
    }
    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={handleSum}>Sum</button>
        </div>
    );
}
export default Counter;

//With this version the updates will be better
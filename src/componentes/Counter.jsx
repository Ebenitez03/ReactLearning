import { useState } from "react";


export function Counter({initialValue=0, sum=1}){
    const [counter, setCounter]= useState(initialValue);
    function handleSum(){
        setCounter((c)=>c+sum);
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
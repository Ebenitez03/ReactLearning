import { useState } from "react";


export function Counter(){
    const [counter, setCouter]= useState(0);
    function handleSum(){
        setCouter((prevCounts)=>{
            [...prevCou]
            +1
        });
        return(
            <div>
                <h1>{counter}</h1>
            </div>
        )
    }
    return(
        <div>
            <button onClick={handleSum}><h2>Add me</h2></button>
        </div>
    );
}
export default Counter;
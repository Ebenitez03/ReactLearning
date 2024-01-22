import { useEffect, useState } from "react";

export function Clock(){
    const [date, setDate]= useState(new Date());

    useEffect(()=>{
        const timeSeeker = setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=>{clearInterval(timeSeeker)}
    },[])
    return (
        <div>
            <h2>Current time is:{date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;
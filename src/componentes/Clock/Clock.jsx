import { useEffect, useState } from "react";
import styles from "./Clock.module.scss";

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
            <h2 className={styles.clock}>Current time is:{date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;
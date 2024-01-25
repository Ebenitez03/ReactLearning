import { useState } from "react";
import {Welcome} from "./Welcome"

export function InteractiveWelcome(){
    const [user, setUser]= useState({name:""});
    function handleChange(){
        setUser({ ...name, [event.target.id]: event.target.value });
    }
    return(
        <div>
            <input onChange={handleChange} type="text" id="name" value={user.name}/>
            <Welcome name={user.name}/>
        </div>
    )
}
export default InteractiveWelcome;
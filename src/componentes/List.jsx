import { useState } from "react";

export function List(){
    const [list, setList]= useState([]);
    const [item, setItem]= useState("");
    function handleChange(event){
        setItem(event.currentTarget.value)
    }
    console.log(item)

    function handleClick(){
        setList((prevItems)=>[...prevItems, item]);
        setItem("");
    }
    console.log(list)

    return(
        <div>
            <input id="item" value={item} onChange={handleChange} type="text"/>
            <button onClick={handleClick} type="submit">Submit</button>
            {list.map((el, index)=>(
                <li key={index}>{el}</li>)
            )}
        </div>
    )

}
export default List;
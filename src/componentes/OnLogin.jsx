import { useState } from "react";

export function OnLogin({name="", password=""}) {
    console.log(name)
    const [submit, setSubmit]= useState(false);
    function handleSubmit(){
        setSubmit(true);
    }
  return (
    <div>
    <button disabled={!name||!password} onClick={handleSubmit}>Submit</button>
      {submit&&<p>{name} is logged</p>}
    </div>
  );
}
export default OnLogin;

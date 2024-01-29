import { useState } from "react";

export function OnLogin({name="", password=""}) {
    console.log(name)
    const [submit, setSubmit]= useState(false);
    function handleSubmit(event){
      event.preventDefault();
        setSubmit(true);
    }
  return (
    <form onSubmit={handleSubmit}>
    <button type="submit" disabled={!name||!password}>Submit</button>
      {submit&&<p>{name} is logged</p>}
    </form>
  );
}
export default OnLogin;

//We use event.preventDefault to prevent default
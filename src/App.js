import React, { useState } from "react";

function App(){

  const[name,SetName]=useState("");
  const[fullname,SetFullName]=useState();

  const inputEvent=(event)=>{
    SetName(event.target.value);
  }

  const SubmitEvent=()=>{
    SetFullName(name);
  };


  return(
    <>
      <form>
        <label>Hello,{fullname}</label>
        <br/>
        <input type="text" placeHolder="ENter name" value={name} onChange={inputEvent}></input>
        <button onClick={SubmitEvent}>Submit</button>
      </form>
    </>
  );
}

export default App;

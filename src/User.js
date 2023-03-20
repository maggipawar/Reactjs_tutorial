import React, { useState } from "react";

export const User = () => {
  const [user,setUser]=useState(null);
  const [pass,setPass]=useState(null);
  const [userVal,setUserVal]=useState(false);
  const [passVal,setPassVal]=useState(false);

  function submitHandler(e){
    if(user.length<3 || pass.length<3){
      alert('Type Correct Value');
    }else{
      alert('All is Good :)');
    }

    e.preventDefault();    

  }

  function userHandler(e){
    let item = e.target.value;
    if(item.length<3){
      setUserVal(true);
    }else{
      setUserVal(false);
    }
    setUser(item);

  }

  function passHandler(e){
    let item = e.target.value;
    if(item.length<3){
      setPassVal(true);
    }else{
      setPassVal(false);
    }
    setPass(item);
  }

  return (
    <div> 
    <form onSubmit={submitHandler}>
      <input type='text' placeholder="Enter User ID" onChange={userHandler}/>{userVal ?<span>User Not valid</span>:null}
      <br/> <br/>
      <input type='password' placeholder="Enter User Password" onChange={passHandler} />{passVal ?<span>Password Not valid</span>:null}
      <br/> <br/>
      <button type='submit'>Submit</button>
    </form>
    </div>
  );
};


import React, {useState} from "react";
import './App.css';
import {Login} from "./Login";
import {Registration} from "./Registration";


function Dummy() {
  const [currentform,setCurrentForm]= useState('login');

  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentform=== "login"? <Login onFormSwitch={toggleForm} /> : <Registration onFormSwitch={toggleForm} />
      }
     
    </div>
  );
}

export default Dummy;


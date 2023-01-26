import getValue from "@testing-library/user-event/dist/utils";
import React from "react";
import "./style.css";
import { useState } from "react";
const Home = () => {
  const [calc,setCalc]=useState("");
  const [result,setResult]=useState(0);
  const opps=['/','*','+','-']

  function items(num){
    return (
      <button>{num}</button> 
    );
  }
    const arr=[1,2,3,4,5,6,7,8,9,0];
  const buttonarray=arr.map(items);

  return (
    <div className="calculator">
      <div className="display">

        {result}
      </div>

      <br />

      <div id="digits">
        {buttonarray}

      </div>
      
      <br />

      <div className="operators">
      <button >+</button>
      <button >+</button>
      <button >-</button>
      <button >X</button>
      <button >=</button>   
      </div>

    </div>
  );
};

export default Home;

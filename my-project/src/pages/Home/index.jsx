import getValue from "@testing-library/user-event/dist/utils";
import React from "react";
import "./style.css";
import { useState } from "react";
const Home = () => {
  const [calc,setCalc]=useState("");
  const [result,setResult]=useState("");
  const opps=['/','*','+','-']

  const displayNumbers = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}>{i}</button>);
    }
    return digits;
  };
  return (
    <div className="calculator">
      <div className="display">
        <span>(0)</span>
      </div>

      <br />

      <div className="digits">
      {displayNumbers()}
      <button>0</button>
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

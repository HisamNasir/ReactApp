// import getValue from "@testing-library/user-event/dist/utils";
import React from "react";
import "./style.css";
import { useState } from "react";
const Home = () => {
  const [result, setResult] = useState("");
  const opps = ["/", "*", "+", "-"];
  const buttoncalcarray = opps.map(Calcitems);



  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const buttonarray = arr.map(Items);
  function Calcitems(calcnum) {
    return (
      <button data-operation
        id="operations"
        key={calcnum}
        onClick={() => setResult(result + calcnum)}
      >
        {calcnum}
      </button>
    );
  }
  function Items(num, value) {
    return (
      <button id="number" 
      key={num} 
      onClick={() => setResult(result + num)}>
        {num}
      </button>
    );
  }
  var a;
  const spliter = result.split(/[/*+-]+/);
  const valuex = Math.floor(spliter[0]);
  const valuey = Math.floor(spliter[1]);
  if(result.includes("/")){
   a = valuex / valuey;
  console.log("divide: "+a);
  }
  if(result.includes("*")){
   a = valuex * valuey;
  console.log("multiply: "+a);
  }
  if(result.includes("+")){
   a = valuex + valuey;
  console.log("add: "+a);
  }
  if(result.includes("-")){
   a = valuex - valuey;
  console.log("minus: "+a);
  }
  const Equal=()=>{
    return(
        <div id="answer">
        <div> {a}</div>

        </div>
      )

  }
  const Erase=()=>{
    let wholefunction=result;
    wholefunction.substring(0,result.length-1)
    return(
        <div id="answer">
          {wholefunction}
        </div>
      )

  }

  return (
    <div className="calculator">

      <div className="display">
        
        <div className="Result">Operation:</div>
        <div> {result}</div>
        <hr/>
        <div className="Result">Result:</div>
        <div><Equal/></div>
      </div>

      <br />

      <div id="digits">{buttonarray}</div>

      <br />

      <div className="operators">{buttoncalcarray}
      <button id="equals" onClick={Equal}>=</button>
      <button id="erase" onClick={Erase}>x</button>
      </div>
    </div>
  );
};

export default Home;

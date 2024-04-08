import "./App.css";
import { useState } from "react";

function App() {

  let [val,setVal] =  useState(0);

  function increament(){
    
    val++;
    setVal(val);
    
  }

  function decreament(){

    val--;
    setVal(val);

  }

  function reset(){
    val = 0;
    setVal(val)
  }
  return (
   <div className=" bg-slate-800 h-screen flex flex-col items-center gap-6 justify-center">
    <div className="text-blue-600">Increament && Decreament</div>
    <div className="flex bg-white font-bold p-4 justify-between rounded-sm text-6xl items-center">
      <button className="text-6xl px-4" onClick={decreament}>-</button>
      <p className="border-x-2 border-black px-6" >{val}</p>
      <button className="text-6xl px-4" onClick={increament}>+</button>
    </div>
    <button className="bg-blue-600 px-4 py-1 rounded-md" onClick={reset}>Reset</button>
   </div>
  );
}

export default App;

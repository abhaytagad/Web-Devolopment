


import Cityinfo from "./Cityinfo.js";
import data  from "./data.js";


import { useState } from "react";

function App() {
   
    
    const[flag,setFlag] = useState(true)

    var count2 = 0;
    function count(){

      if (count2 == 6){
        setFlag(false)
        count2 = 0;
      }
      else{
        count2++;
      }
      
    }
    
  
    function refresh(){
        setFlag(true)  
    }

  return (
   <div className="flex flex-col items-center justify-center pt-6 px-32">
   {flag && <div >
    <div className="flex flex-col gap-6 " >
            <div  className="flex flex-col gap-6 items-center justify-center ">
            <p className=" border-dashed border-4 border-blue-900 text-centre font-bold px-40 rounded-lg py-2 text-2xl">Plan With Love</p>
            </div>

            <div className=" info grid grid-cols-3 gap-6"  >
            <Cityinfo info = {data[0]} c = {count} ></Cityinfo>
            <Cityinfo info = {data[1]} c = {count} ></Cityinfo>
            <Cityinfo info = {data[2]} c = {count} ></Cityinfo>
            <Cityinfo info = {data[3]} c = {count}  ></Cityinfo>
            <Cityinfo info = {data[4]} c = {count} ></Cityinfo>
            <Cityinfo info = {data[5]} c = {count} ></Cityinfo>
            <Cityinfo info = {data[6]} c = {count} ></Cityinfo>

            </div>
        </div>
    </div>
    }
   {!flag && <div >
        <div className="flex flex-col text-centre items-center justify-center gap-4  h-screen">
            <h1 className="font-bold ">No Tours Left</h1>
            <button className="bg-slate-300 rounded-lg p-2" onClick={refresh}>Refresh</button>
        </div>
    </div>}
   </div>
  );
}

export default App;

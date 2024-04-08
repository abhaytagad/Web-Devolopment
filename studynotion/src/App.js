
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./Pages/Login";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Sign from "./Pages/Sign";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
function App() {
  const[log,setLog] = useState('Log in')
  const[sign,setSign] = useState('Sign Up')

  function setName(f1,f2){
   
    setLog(f1)
    setSign(f2)
  }
  return (

    <div className="flex bg-slate-800">
        <div className="w-[800px] flex h-screen text-white flex-col gap-8 items-stretch ">

          <NavBar log={log} sign={sign} setName={setName}></NavBar>
          <div className="flex justify-center items-center h-[100%] ">
            
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path="/login" element={<Login setName = {setName}/>}/>
            <Route path="/sign up" element={<Sign setName = {setName}/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </div>
    </div>
    </div>
    
  );
}

export default App;

import { Route, Router, Routes } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center items-center bg-black h-[60px]">
       <Navbar/>
      </div>
      <Routes>
        <Route path='/'element = {<Home/>}/>
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;

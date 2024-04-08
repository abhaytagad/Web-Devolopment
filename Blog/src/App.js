import { Route, Router,Routes } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Tag from "./pages/Tag";

function App() {
  return (

    <div>
      
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/tag" element={ <Tag/>}/>
        
      </Routes>

      
    </div>
   
  );
}

export default App;

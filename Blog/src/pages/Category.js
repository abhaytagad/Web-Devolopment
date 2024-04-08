import { useContext } from "react";
import { APIcontext } from "../context/APIcontext";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Blogs from "../component/Blogs";
import { useNavigate } from "react-router-dom";

function Category(){

    const{data,clickHandler , setCategory} =useContext(APIcontext);
    const naviGate = useNavigate();
    function backHandler(){
        setCategory('')
        clickHandler(1,'','')
        naviGate('/')
    }
    return(
        <div>
            <Header/>
            <div className="flex flex-col items-center gap-2 p-6">
                <p className="font-bold flex gap-6 items-center"><button className="border-2 p-2 rounded-lg" onClick={backHandler}>Back</button> Blogs on {data[0].category}</p>
                <Blogs/>
            </div>
            <Footer/>
        </div>
    )
}
export default Category;
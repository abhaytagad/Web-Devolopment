import { useState } from "react";

function Cityinfo(props){
    const link = props.info.image;
    const price = props.info.price;
    const place = props.info.name;
    const info = props.info.info.substring(0,200); 
    const length = props.info.info.length
    const[status,setStatus] = useState(false)
    const [visible,setVisibility] = useState(true)
    
    
    function moreInfo(){
        if (status){
            setStatus(false);
        }
        else{
            setStatus(true);
        }
           
    }
    function visibility(){
        setVisibility(false);
        props.c()
        
    }

    return(

        visible &&<div className="flex flex-col justify-between gap-2 p-4 h-[100%] rounded-lg shadow-xl  font-bold" >
            <img src= {link} alt="" className="h-[70%] rounded-lg"/>
            <p className="text-green-400 ">&#8377; {price}</p>
            <h1 className="font-bold ">{place}</h1>
            <p className="text-xs">{info} {!status &&<button onClick={moreInfo} className="text-blue-600">....Read More</button> }{status &&<span className="more "  >{props.info.info.substring(200,length)} <button onClick={moreInfo} className="text-blue-400">Read Less</button></span>} </p>
            <button className=" bg-red-300 rounded-lg text-center py-2 text-black font-bold border-red-700 hover:bg-red-700" onClick={visibility}>Not Interested</button>
        </div>
    )
}

export default Cityinfo;
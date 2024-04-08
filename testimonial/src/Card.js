
import reviews from "./data";
import data from "./data"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft,faQuoteRight,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Card(){

    const[index,setIndex] = useState(0);

    function random(){
       let num =  Math.random()
       num = Math.floor(num*6)
       setIndex(num);
    }

    function rightMove(){
        if (index == 5){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }

    }

    function leftMove(){
        if (index == 0){
            setIndex(5)
        }
        else{
            setIndex(index-1)
        }

    }

    const data = reviews[index];
    return(
        <div className="flex rounded-lg p-11 relative text-center w-[600px] flex-col items-center justify-center bg-white">
           
            <div className="flex left-[24px] -top-7 bg-violet-400 overflow-hidden absolute w-28 h-28 rounded-full">
            </div>
            <div className="flex left-[20px] -top-6  overflow-visible absolute w-28 h-28 rounded-full">
                <img src={data.image} alt="" className="w-28 h-28 rounded-full  absolute -left-1" />
            </div>
            <div className="flex items-center flex-col gap-4">
                <h1 className="font-bold text-xl">{data.name}</h1>
                <p className="font-bold text-slate-400">{data.job}</p>
                <FontAwesomeIcon icon={faQuoteLeft} />
                <p>{data.text}</p>
                <FontAwesomeIcon icon={faQuoteRight} />
                <div className="flex justify-between w-24 ">
                <FontAwesomeIcon icon={faAngleLeft} onClick={rightMove} className="h-8" /> 
                <FontAwesomeIcon icon={faAngleRight} onClick={leftMove} className="h-8"/>
                </div>

                <button onClick={random} className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold">Surprise Me</button>
            </div>
            

        </div>
    )
}
export default Card;
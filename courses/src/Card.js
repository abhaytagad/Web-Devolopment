import React, { useState } from "react";
// import {FcLike} from "react-icons/fc"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { toast } from "react-toastify";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Card({data}){
    
    const [color,setColor] = useState('rgba(0, 0, 0, 1)')
    function showToast(){
  
        
        if (color == 'rgba(0, 0, 0, 1)'){
            toast.success("liked")
            setColor('rgba(255, 0, 0, 1)')
        }
        else{
            toast.error("Unliked Succesfully")
            setColor('rgba(0, 0, 0, 1)')
        }
        
        
    }
    
    return(

        <div className=" gap-4 flex flex-col bg-slate-900 rounded-lg shadow-2xl">
            
            <div className="relative overflow-visible "> 
                <img src={data.image.url} alt="" className="rounded-lg" />
                <div className=" absolute flex items-center justify-center bg-white right-3 top-[160px] w-14 h-14 rounded-full" onClick={showToast}  >
                        <FontAwesomeIcon icon={faHeart} className=" h-11  " style={{color:color}} />
                </div>
                </div>
            <div className="flex flex-col gap-4 p-4">
                <h1 className="font-bold text-2xl text-white">{data.title}</h1>
                <p className="text-white ">{data.description}</p>
            </div>
        </div>
    )
        
}

export default Card;
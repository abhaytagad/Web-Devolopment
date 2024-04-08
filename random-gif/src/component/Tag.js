import { useState } from "react";
import useApi from "../hook/useApi";
import Spinner from "./Spinner";
function Tag(){
    
    const [tag,setTag] = useState('');
    const {gif,loading,fetchData} = useApi(tag);

    function changeHandler(event){
       
        setTag(event.target.value)
        
    }


    return(
        <div className="flex flex-col w-[40%] bg-blue-800 gap-4 p-4 rounded-lg  items-center">
            <h1 className="text-2xl font-bold ">A RANDOM {tag} GIF</h1>
            {loading? <Spinner/>  : <img src={gif} alt="" height="270px" width="480"/> 
            
            }
            <input type="text" className="bg-white p-2 rounded-lg w-[80%] text-center" value={tag} placeholder="search for" onChange={changeHandler}/>
            <button className="bg-yellow-400 p-2 rounded-lg w-[80%]" onClick={()=>{fetchData(tag)}}>Generate</button>
        </div>

    )
}

export default Tag;
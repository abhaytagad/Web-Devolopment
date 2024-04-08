import { useContext} from "react";
import Spinner from "../component/Spinner";
import { APIcontext } from "../context/APIcontext";
import Card from "./Card";

function Blogs(){

    const {loading,data } = useContext(APIcontext)
    
   console.log(data)
    return(
        <div className="flex flex-col gap-6 items-center w-[50%] ">
         {loading && data.length == 0 ? <Spinner/> :(data.map(value=>{
            return <Card posts={value}/>
         }))
         }
        </div>
    )
}
export default Blogs;
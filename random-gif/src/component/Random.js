import useApi from "../hook/useApi";
import Spinner from "./Spinner";
function Random(){

    const {gif,loading,fetchData} = useApi();

    return(
        <div className="flex flex-col w-[40%] bg-green-700 gap-4 p-4 rounded-lg  items-center">
            <h1 className="text-2xl font-bold ">A RANDOM GIF</h1>
            {loading? <Spinner/>  : <img src={gif} alt=""  height="270px" width="480" />}
            <button className="bg-yellow-400 p-2 rounded-lg w-[80%]" onClick={()=>{fetchData()}}>Generate</button>
        </div>
    )
}
export default Random;
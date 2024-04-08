import { useContext } from "react";
import { APIcontext } from "../context/APIcontext";
function Footer(){

    const{pages,pageNumber,preHide,nextHide,clickHandler} = useContext(APIcontext)
    
    function prevHaldler(){
        if (pageNumber != pages){
            let number = pageNumber-1
            clickHandler(number,'','')
        }
        
    }
    function nextHaldler(){
        
       if (pageNumber != pages){
            let number = pageNumber+1
            clickHandler(number,'','')
       }   
    }
    
    return(
        <div className="flex justify-between border-t-2 w-full px-[300px] py-2 items-center text-black shadow-[-5px_-5px_10px_rgba(0,0,0,0.5)]">

            <div className="flex gap-4">
               {preHide&& <button className="border-2 p-2 rounded-lg" onClick={prevHaldler}>Previous</button>}
               {nextHide&& <button className="border-2 p-2 rounded-lg" onClick={nextHaldler}>Next</button>}
            </div>
            <p className="font-bold">Page {pageNumber} of {pages}</p>
        </div>
    )
}
export default Footer;
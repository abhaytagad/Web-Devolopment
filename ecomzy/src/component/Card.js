import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props){
    
    return(
        <div className="flex flex-col items-center justify-between shadow-2xl p-2 pt-2 pb-2 rounded-xl border-2 hover:scale-110 group transition-transform duration-700">
            <div className="flex flex-col p-4 gap-4 ">
                <h1 className="font-bold gap-6">{props.product.title.slice(0,17)}...</h1>
                <p className="">{props.product.description.slice(0,51)}..</p>
                <img src={props.product.image} alt="" className="h-[200px]" />
            </div>
            <div className="flex w-[100%] justify-between items-center text-xs font-bold">
                <p className="text-green-600"><FontAwesomeIcon icon={faDollarSign}/> {props.product.price}</p>
                <button className="border-2 border-black px-4 py-1 rounded-3xl group-hover:bg-black group-hover:text-white">ADD TO CART</button>
            </div>
        </div>
    )
}
export default Card;
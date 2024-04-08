import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { APIcontext } from "../context/APIcontext";

function Card(props){

    const{clickHandler} = useContext(APIcontext);

    function categoryHandler(){
        
        clickHandler(1,props.posts.category,'')
        
    }

    function tagHandler(event){
        clickHandler(1,'',event.target.value)
        console.log(event.target.value)
    }
   
    return(
        <div className="flex flex-col gap-2 items-start w-[100%]">
            
            <h1 className="font-bold text-xl">{props.posts.title}</h1>

            <div>
                <p>By {props.posts.author} on <NavLink to={'/category'} onClick={categoryHandler}>{props.posts.category}</NavLink></p>
                <p>Posted on {props.posts.date}</p>
            </div>

            <p>{props.posts.content}</p>
            <div className="flex gap-1 text-blue-700">{props.posts.tags.map(tag=>{

               return <NavLink to="/tag" onClick={tagHandler} value={tag} >#{tag}</NavLink>
            })}</div>
        </div>
    )
}
export default Card;
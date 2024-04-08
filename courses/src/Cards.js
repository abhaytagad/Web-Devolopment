import { useState } from "react";
import Card from "./Card";


function Cards(props){
    let course = props.course
    let array = []
    
   
    const getArray = ()=>{
        //console.log(props.field)
        Object.keys(course).forEach(key=>{
            
            if (key == props.field){
                console.log(key)
                course[key].forEach( data=>{
                    array.push(data)
                }
                
                )
            }
            
        }
        

        )
        if (props.field =='All'){
            Object.values(course).forEach(value=>{
                value.forEach(detail=>{
                    array.push(detail)
                }
                )
            }
            )
        }
        return array       
    }
    let field = array[0]
    

return(
    <div className="grid grid-cols-3 gap-8">
       {
        getArray().map(data=>{
            return   <Card key={data.id} data={data}/>
        
        }
            
        )
       }
    
        
    </div>
)
}
export default Cards;
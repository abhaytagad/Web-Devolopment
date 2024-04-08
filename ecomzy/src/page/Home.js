
import { products } from "../data";
import Card from "../component/Card";

function Home(){
    
    return(

        <div className="flex justify-center">
            <div className="grid gap-8  w-[80%] grid-cols-4">
            {
                products.map(product =>{

                    return <Card product={product}/>
                }

                )
            }

        </div>
        </div>
    )
}

export default Home;
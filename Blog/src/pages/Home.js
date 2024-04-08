import Header from "../component/Header"
import Footer from "../component/Footer"
import Blogs from "../component/Blogs"
import { useContext } from "react"
import { APIcontext } from "../context/APIcontext"
import { useEffect } from "react"

function Home(){
    const{fetchData} = useContext(APIcontext)
    useEffect(()=>{
        fetchData(1,'','');
    },[])


    return(
        <div  className="flex flex-col justify-between items-center gap-6 ">
            <Header/>
            <Blogs/>
            <Footer/>
        </div>
    )
}
export default Home;
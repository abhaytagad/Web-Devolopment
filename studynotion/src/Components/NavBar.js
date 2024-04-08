import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar(props){
    const naviGate = useNavigate();
    
    function clickHandler(){
        naviGate("/login")
        props.setName('Log in','Sign Up')
       
    }

    function signHandler(event){
        naviGate("/sign up")
        props.setName('Log in','Sign Up')
        
    }

    function homeHandler(){
        naviGate('/')
       
    }
    return(
        <nav className="flex justify-between items-center pt-4">
            <div className="flex gap-4 items-center " onClick={homeHandler}>
                <img className="h-10 w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRpP6_EeSTQ1QLEDB8f4IVL8xB0AcuWmlINQ&usqp=CAU" alt="" />
                <h1>StudyNotion</h1>
            </div>
            <div className="flex justify-between">
                <ul className="flex justify-between gap-6 items-center">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>About</NavLink></li>
                    <li><NavLink>Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex items-center justify-between gap-4">
                <button onClick={clickHandler} className="bg-gray-600 px-4 rounded-md py-1">{props.log}</button>
                <button onClick={signHandler} className="bg-gray-600 px-4 rounded-md py-1">{props.sign} </button>
            </div>
        </nav>
    )
}

export default NavBar;
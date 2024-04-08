
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Navbar(){

    return(
        <div className="flex flex-row justify-between h-[50px] items-center w-[80%] text-white">

            <div className='flex'>
                <NavLink to='/' >
                    <img src="../logo.png" alt="logo"  width= '120px'  />
                </NavLink>
            </div>
            <div className="flex items-center gap-6 ">
                <p >
                    <NavLink to='/'>  
                     Home
                    </NavLink> 
                </p>
               <NavLink to='/cart'>
                     <FontAwesomeIcon icon={faCartShopping} color='white' />
               </NavLink>
            </div>
        </div>
    )
}

export default Navbar;

import Google from "../Components/Google";
import { useNavigate } from "react-router-dom";
function Sign(props){
    
    const naviGate = useNavigate()
    function clickHandler(){
        naviGate("/dashboard")
        props.setName('Log Out', 'Dashboard')
    }

    return(

        <div className="flex  justify-between">
            <div className="flex flex-col w-[40%] gap-4">
                <h1 className="font-bold text-xl">Join the millions of learning to code with StudyNotion for free</h1>
                <p>Build skills for today ,tommarow and beyond <span className="text-sky-500">education to future-proof your career</span> </p>

                <div className=" flex bg-slate-500 w-[60%] justify-center rounded-xl p-2 text-xl gap-2">
                    <button>Student</button>
                    <button>Instructor</button>
                </div>

                <form className=" flex flex-col gap-6">
                    
                   
                <div className="flex justify-between gap-4 ">
                    <div className="">
                   <label htmlFor="firstname">First Name</label>
                    <br />     
                    <input className="bg-slate-700 p-2 rounded-md" type="text" id="firstname" placeholder="First Name" />
                   </div>
                    <div>
                    <label htmlFor="lastname">First Name</label>
                    <br />
                    <input className="bg-slate-700 p-2 rounded-md" type="text" id="lastname" placeholder="Last Name" />
                    </div>
                </div>

                <div>
                    
                    <label htmlFor="email">Emial Address </label>
                    <br />
                    <input className="bg-slate-700 p-2 w-[100%] rounded-md" type="email" id="email" placeholder=" Emial Address" />
                    <br />
                </div>
                <div className="flex gap-4 justify-between">
                    <div>
                    <label htmlFor="creatpasswor">Create Password</label>
                    <br />
                    <input className="bg-slate-700 p-2 rounded-md" type="password" id="creatpasswor" placeholder="Password" />
                    <br />
                    </div>
                    <div>
                    <label htmlFor="conformpassword">Conform Password</label>
                    <br />
                    <input className="bg-slate-700 p-2 rounded-md" type="password" id="conformpassword" placeholder="Conform Password" />
                    <br />
                    </div>
                    
                </div>
                    <button className="bg-yellow-400 p-1 font-bold text-black w-[100%] rounded-md px-2" onClick={clickHandler}>Create Account</button>      
                </form>
                <fieldset >
                    <legend>OR</legend>
                </fieldset>
                <Google/>
            </div>

            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfKH363Gmu4egqQRN0dvfuTlR28gqCS6ycA&usqp=CAU" alt="" />
            </div>
        </div>

    )
}

export default Sign;
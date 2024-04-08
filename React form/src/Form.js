import { useState } from "react";


function Form(){

    const[formData , setFormData] = useState({firstName:"" , lastName:'', Email:'',country:'India', Address: '',City:'', State:'',ZIPCode:'',Comments:false ,Canditates:false , Offers:false , Radio:''})
    console.log(formData)

    function changeHandler(event){
        
        const{name,value ,checked,type} = event.target
        setFormData( prevData =>{

            return{
                ...prevData,
                [name] :   type == 'checkbox' ? checked: value
            }
            
        }
            
        )
        
    }

    function submitHandler(event){
        event.preventDefault();
    }

    return(
        <form onSubmit={submitHandler} className="w-[100%] ">

            <label htmlFor="firstName" className=" font-bold">First Name</label>
            <br />
            <input 
            className="border border-amber-500 w-[100%] p-2 rounded-lg"
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="First Name"/>
        <br />
            <label htmlFor="lastName"  className=" font-bold">Last Name</label>
            <br />
            <input 
            className="border border-amber-500 w-[100%] p-2 rounded-lg"
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="Last Name"/>
         <br />
            <label htmlFor="emai"  className=" font-bold">Email Address </label>
            <br />
            <input
            className="border border-amber-500 w-[100%] p-2 rounded-lg" 
            type="email"
            name="Email"
            id="emai"
            value={formData.Email}
            onChange={changeHandler}
            placeholder="Email"/>
         <br />
            <label htmlFor="country"  className=" font-bold">Country</label>
            <br />
           <select name="country" id="country" value={formData.country} onChange={changeHandler}  className="border border-amber-500 w-[100%] p-2 rounded-lg">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <option value="Australia">Australia</option>
            <option value="Russia">Russia</option>
            <option value="Iserael">Iserael</option>
            <option value="Japan">Japan</option>
            <option value="Italy">Italy</option>
           </select>
         <br />
            <label htmlFor="Address"  className=" font-bold">Street Address </label>
            <br />
            <input 
             className="border border-amber-500 w-[100%] p-2 rounded-lg"
            type="text"
            name="Address"
            id="Address"
            value={formData.Address}
            onChange={changeHandler}
            placeholder="Address"/>
         <br />
            <label htmlFor="city"  className=" font-bold">City</label>
            <br />
            <input 
             className="border border-amber-500 w-[100%] p-2 rounded-lg"
            type="text"
            name="City"
            id="city"
            value={formData.City}
            onChange={changeHandler}
            placeholder="City"/>
         <br />
            <label htmlFor="State"  className=" font-bold">State</label>
            <br />
            <input 
             className="border border-amber-500 w-[100%] p-2 rounded-lg"
            type="text"
            name="State"
            id="State"
            value={formData.State}
            onChange={changeHandler}
            placeholder="State "/>
        <br />
            <label htmlFor="zip code"  className=" font-bold">ZIP Code</label>
            <br />
            <input 
             className="border border-amber-500 w-[100%] p-2 rounded-lg"
            type="number"
            name="ZIPCode"
            id="zip code"
            value={formData.ZIPCode}
            onChange={changeHandler}
            placeholder="ZIP Code"/>

            <h1  className=" font-bold"> By Email</h1>

            <input 
            type="checkbox"
            name="Comments"
            id="comments"
            checked={formData.Comments}
            onChange={changeHandler}
           />
            <label htmlFor="comments"  className=" font-bold">  Comments</label>
            <p>get notified when someone posts a comment on a posting</p>
        <br />
        <input 
            type="checkbox"
            name="Canditates"
            id="candidates"
            checked={formData.Canditates}
            onChange={changeHandler}
           />
            <label htmlFor="candidates"  className=" font-bold">  Canditates</label>
            <p>get notified when candidates applied for a job</p>
        <br />
        <input 
            type="checkbox"
            name="Offers"
            id="offers"
            checked={formData.Offers}
            onChange={changeHandler}
           />
            <label htmlFor="offers"  className=" font-bold">  Offers</label>
            <p>get notified when candidates accept or reject an offer</p>
        
            <h1  className=" font-bold">Push Notifications</h1>
            <p>These are dellevered via SMS to your mobile phone</p>
        
            <input 
            type="radio"
            name="Radio"
            id="Radio"
            value="Everything"
            onChange={changeHandler}
           />
            <label htmlFor="Radio"  className=" font-bold">  Everything</label>
            
        <br />
            <input 
                type="radio"
                name="Radio"
                id="Radio"
                value='Same-as-Email' 
                onChange={changeHandler}
            />
            <label htmlFor="Radio"  className="font-bold">  Same as Email</label>
        <br />
            <input 
                type="radio"
                name="Radio"
                id="Radio"
                value='No-push-Notifications'
                onChange={changeHandler}
            />
            <label htmlFor="Radio"  className="font-bold">  No push Notifications </label>
        <br />
        <br />
            <button className="bg-blue-800 text-white font-bold px-2 py-1 rounded-lg">Save</button>

        </form>
    )
}

export default Form;
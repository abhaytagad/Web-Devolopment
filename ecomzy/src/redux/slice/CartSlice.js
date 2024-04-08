import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add : state=>{

        },
        remove : state=>{
            
        }
    }

})

export const{add,remove} = CartSlice.actions;
export default CartSlice.reducer;

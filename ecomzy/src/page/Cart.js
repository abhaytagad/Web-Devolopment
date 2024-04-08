import { useSelector } from "react-redux";


function Cart(){

    const{cart} = useSelector(state =>{state.cart})
    //console.log(cart)

    return(
        <div>

        </div>
    )
}
export default Cart;
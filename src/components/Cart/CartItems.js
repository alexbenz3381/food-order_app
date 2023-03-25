import { useDispatch } from "react-redux";
import { cartDataActions } from "../../store";
import classes from "./CartItem.module.css";

function CartItems(props){
const dispatch=useDispatch();

const addToCartHandler=() => {
  
  dispatch(cartDataActions.addToCart({id:props.id,name:props.name,price:props.price,amount:1}))  
}

const removeFromCartHandler=() =>{
  dispatch(cartDataActions.removeFromCart(props))
}


return <div className={classes.setCart}> 
<div className={classes.cart}>
 <h1>{props.name}</h1>
 <h2>${props.price}</h2>
 <h4><span className={classes.amount}>X</span>{props.amount}</h4>
 </div> 
 <div className={classes.button}>
 <button onClick={addToCartHandler}>+</button>
 <button onClick={removeFromCartHandler}>-</button>
 </div>

</div>
}


export default CartItems;
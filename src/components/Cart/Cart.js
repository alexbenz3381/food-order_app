
import CartItems from "./CartItems";
import { useDispatch,useSelector } from "react-redux";
import { toggleCartActions } from "../../store/CartToggleHandler";
import classes from "./Cart.module.css"; 
import Modal from "./Modal";


function Cart() {
  const dispatch=useDispatch();
  const cartItems=useSelector(state => state.cartData.items);
  const carttotalPrice=useSelector(state => state.cartData.totalPrice)

  const cartHandler=() => {
    dispatch(toggleCartActions.setToggle());
   }



  return (
    <Modal>
    <div className={classes.cart}>
      <h2 className={classes.header}>Your Cart</h2>
      {cartItems.length===0 && <h1 className={classes.error}>Your Cart is Empty</h1>}
      <ul className={classes.items}> {cartItems.map((item) => <CartItems
        key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
        />
      )}</ul> 
      <div className={classes.total}>
      <h2>total: <span className={classes.price}>${carttotalPrice}</span> </h2>
      { cartItems.length>0 && <button>Order</button>}
      <button className={classes.cancel} onClick={cartHandler} >cancel</button>
      </div>
      </div>
    </Modal>
  );
}

export default Cart;




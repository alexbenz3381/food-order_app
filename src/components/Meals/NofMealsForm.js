import { useState } from "react";
import classes from "./NofMealsForm.module.css";
import {useDispatch} from "react-redux";
import { cartDataActions } from "../../store";

function NofMealsForm(props){
    const [input,setInput]=useState(1);
    const dispatch= useDispatch();
    const item=props.item;

    const onChangeHandler=(event) => {
      setInput(event.target.value);
    }
   
    const incrementHandler =(event) => {
        event.preventDefault();
        if(input<5){
            setInput(prevVal => prevVal=prevVal+1);
        }
        
    }
    const decrementHandler =(event) => {
        event.preventDefault();
        if(input>1){
            setInput(prevVal => prevVal=prevVal-1);
        }
    }

    const submitHandler =(event) =>{
        event.preventDefault();

        dispatch(cartDataActions.addToCart({
            id:item.id,
            name:item.name,
            price:item.price,
            amount:input
        }));
        
    }



    return <form  onSubmit={submitHandler}>
       <div className={classes.form}>
         <button onClick={incrementHandler}>+</button>
        <input onChange={onChangeHandler} type="number" min="1" max="5" default="1" value={input}></input>
        <button onClick={decrementHandler}>-</button>
        </div>
       <button className={classes.main} type="submit" >Add to cart</button>
    </form>
}


export default NofMealsForm;
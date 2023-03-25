
import { useSelector, useDispatch } from "react-redux";
import {toggleCartActions} from "./../../store/CartToggleHandler"
import classes from "./HeaderButton.module.css";

function HeaderButtton() {
  const dispatch = useDispatch();
  const cartAmount=useSelector(state => state.cartData.totalAmount )

  const handleCart = () => {
    dispatch(toggleCartActions.setToggle());
  };

  return (
    <div className={classes.effect}>
      <button onClick={handleCart} className={classes.account}>
        cart
        <span>
          <p className={classes.batch}>{cartAmount}</p>
        </span>
      </button>
    </div>
  );
}

export default HeaderButtton;

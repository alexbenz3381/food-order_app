import Header from "./components/Header/Header";
import SearchBar from "./components/Header/SearchBar";
import DisplayMeals from "./components/Meals/DisplayMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import { useSelector,useDispatch } from "react-redux";
import { cartDataActions } from "./store";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/use-http";

let isInitial=true;

function App(){
  const dispatch=useDispatch();
  const toggleCart=useSelector(state => state.cart.cartToggle);
  const cart=useSelector(state => state.cartData);

  useEffect(() => {
    dispatch(fetchCartData());
  },[dispatch]);

  useEffect(() => {
    if(isInitial){
      isInitial=false;
      return;
    }
   if(cart.changed){
    dispatch(sendCartData(cart));
   }
   
  },[dispatch,cart]);


  return <>
  <Header  />
  {toggleCart && <Cart />}
  <MealsSummary />
  <SearchBar />
  <DisplayMeals />
  {/* <Footer /> */}
  </>
}

export default App;
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import ManageDisplay from "./ManageDisplay";
import classes from "./DisplayMeals.module.css";

function DisplayMeals() {
  const [mealData, setMealData] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    const receiveMeals = (taskObj) => {
      const dummy=taskObj.items;
      const loadedTasks = [];

      dummy.map((item) => {
        loadedTasks.push(
          {
          id:item.id,
          name:item.name,
          price:item.price,
          url:item.url
        })
      })

      setMealData(loadedTasks);
    };
   

    sendRequest({ url:"https://react-http-3cb44-default-rtdb.firebaseio.com/menu.json" }, receiveMeals);
  },[sendRequest]);

  const spinner=<div className={classes.spinner}>
    <div className="spinner-grow text-muted"></div>
<div className="spinner-grow text-primary"></div>
<div className="spinner-grow text-success"></div>
<div  className="spinner-grow text-info"></div>
<div className="spinner-grow text-warning"></div>
<div className="spinner-grow text-danger"></div>
<div className="spinner-grow text-secondary"></div>
<div className="spinner-grow text-dark"></div>
<div className="spinner-grow text-light"></div>

  </div>

  return (
    <div>
        {error && <h2 className={classes.error}>{error}</h2>}
     {!isLoading ? <ManageDisplay items={mealData} /> :<div>{spinner}</div>}
    </div>
  );
}

export default DisplayMeals;

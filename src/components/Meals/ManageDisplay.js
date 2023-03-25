import { motion } from "framer-motion";
import classes from "./ManageDisplay.module.css";
import NofMealsForm from "./NofMealsForm";

function ManageDisplay(props) {
  const mealParent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  const mealChild = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const items = props.items;
  return (
    <motion.div
      variants={mealParent}
      className="row"
      animate="visible"
      initial="hidden"
    >
      {items.map((item) => {
        return (
          <motion.div
            className={`card ${classes.display}`}
            variants={mealChild}
          >
            <img className="card-img-top" src={item.url} alt="set of foods" />
            <div className="card-body">
              <h1>{item.name}</h1>
              <h4>$ {item.price}</h4>
              <NofMealsForm item={item} />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default ManageDisplay;

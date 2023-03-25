import React from "react";
import classes from "./Header.module.css";
import HeaderButtton from "./HeaderButton";


function Header(props){
    return <> <div className={classes.header}>
        <div className={classes.effect}>
            <h2>React</h2>
        </div>
        <HeaderButtton />
    
    </div>
    <div className={classes.mainImg}>
        <img src="images.jpg" alt="delicious food"></img>
    </div>
    </>
}


export default Header;
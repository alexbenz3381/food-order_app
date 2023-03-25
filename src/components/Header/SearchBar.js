

import classes from "./SearchBar.module.css";

function SearchBar(){
return <div className={classes.search}>
    <input type="text" placeholder="search for your favourite food" />
    <button>search</button>
</div>

}


export default SearchBar;
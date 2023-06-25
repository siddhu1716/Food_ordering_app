import React from "react";
import { Fragment } from "react";
import mealsImage from "../../assets/mealsimage.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meals/MealsSummary";

const Header = (props) => {
    return(
    <Fragment>
        <header className={classes.header}>
            <h1> React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header> 
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="a meal image" />
        </div>
    </Fragment>
    );
};
export default Header;
import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {

    let transformedIngredients =
        // get all object property names
        Object.keys(props.ingerdients).map(igKey => {
            console.log(igKey);
            //Create an empty array with lenght of property value
            //And iterate it again by map.
            return [...Array(props.ingerdients[igKey])].map((_, i) => {
                console.log(i);
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });

        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    //console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
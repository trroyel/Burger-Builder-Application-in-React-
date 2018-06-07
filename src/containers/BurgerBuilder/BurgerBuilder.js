import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    // constructor(){
    //     super();
    //     this.state = {};
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },

        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const updatedPrice = this.state.totalPrice + priceDeduction;

        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        });
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const updatedPrice = this.state.totalPrice - priceDeduction;

        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        });
    };


    render() {

        const disableInfo = {
            ...this.state.ingredients
        }

        for (const key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
            // console.log(key, disableInfo[key]);
        }

        return (
            <Aux>
                <Burger ingerdients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disableInfo={disableInfo} 
                    price={this.state.totalPrice}/>

            </Aux>
        );
    }
}

export default BurgerBuilder;
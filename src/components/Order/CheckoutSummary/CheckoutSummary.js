import React from 'react';

import Burger from '../../Burger/Burger.js';
import Button from '../../UI/Button/Button';
import classess from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classess.CheckoutSummary}>
            <h1> We hope it testes well</h1>

            <div className={classess.BurgerWrapperStyle}>
                <Burger ingredients={props.ingredients} />
            </div>

            <Button
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>

        </div>
    );
}


export default checkoutSummary;
import * as actionTypes from './actionTypes';

export const purchaseBurgerSuccess = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS
    }
}

export const purchaseBurgerFail = () => {
    return {
        type: actionTypes.purchaseBurgerFail
    }
}


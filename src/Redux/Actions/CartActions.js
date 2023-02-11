import { ActionTypes } from './ActionTypes'

export const addToCart = (value) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: value,
    }
}

export const removeFromCart = (value) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: value,
    }
}
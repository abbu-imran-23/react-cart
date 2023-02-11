import { ActionTypes } from "../Actions/ActionTypes"

const initialState = 0;

export const CartReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ActionTypes.ADD_TO_CART:
            return state + action.payload;

        case ActionTypes.REMOVE_FROM_CART:
            return (state === 0) ? 0 : state - action.payload;

        default:
            return state;

    }
}
import { ActionTypes } from "../contants/action.types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,      
    };
};

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
    };
};
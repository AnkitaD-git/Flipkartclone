import { ActionTypes } from "../contants/action.types"

const initialState = {
    products: [],
    /* cart:[] */
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }

};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return {};
        default:
          return  state;
    }
};


export const addToCartReducer  = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                products: [...state.products, payload ]
            }
        default:
            return state;
    }

};
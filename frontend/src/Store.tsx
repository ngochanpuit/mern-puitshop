import React, { createContext, useReducer } from 'react';

export const Store = createContext(null);

const initialState = {
  cart: {
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...state.cart.cartItems, action.payload], //action.payload đại diện cho sản phẩm muốn thêm.
        },
        //cart: {
        //   cartItems: [
        //     { id: 1, name: 'Product A' }, *state.cart.cartItems
        //     { id: 2, name: 'Product B' }, *action.payload
        //   ],
        // }
      };
    default:
      return state;
  }
}
export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

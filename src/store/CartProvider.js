import CartContext from './cart-context';
import {useReducer} from 'react';

const defaultState = {
    items  : [],
    totalAmount : 0
};


const cartReducer = (state, action) => {
    if(action.type == 'ADD')
    {
        const updatedItem = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items : updatedItem,
            totalAmount : updatedTotalAmount
        };
    } 

    if(action.type == 'REMOVE')
    {

    }
    return defaultState;
};


const CartProvider = (props) => {

    const [cartState, dispathCartAction] = useReducer(cartReducer, defaultState);

    const addItemToCartHandler = (item) => {
        dispathCartAction({type : 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispathCartAction({type : 'REMOVE', id: id});
    };

    const cartContext = {
        items : cartState,
        totalAmount: cartState.totalAmount,
        addItem : addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );

};

export default CartProvider;

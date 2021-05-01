import { useContext } from 'react';
import CartItem from '../Cart/CardIcon';
import classes from './HeaderCardButton.module.css';
import  CartContext  from '../../store/cart-context';

const HeaderCardButton = (props) => {

    const cartCxt = useContext(CartContext);

    const numberOfCartItems = cartCxt.items.items.reduce((currentItemNumber, item) => {
        return currentItemNumber + item.amount
    }, 0);


    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartItem/>
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCardButton;
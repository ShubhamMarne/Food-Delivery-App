import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {

    const cartCxt = useContext(CartContext);

    const totalAmount = `$${cartCxt.totalAmount}`;

    const cartitems = (<ul className={classes["cart-item"]}>{cartCxt.items.items.map((item) => {
        <li>{item.name}</li>
    })}</ul>);

    return (
        <Modal onClose={props.onClose}>
            {cartitems}
            <div>
                <span className={classes.total}>
                    Total Amount
                </span>
                <span>
                    {totalAmount}
                </span>
            </div>
            <div className={classes.action}>
                <button className={classes["button--alt"]} onClick={props.onClose}> Close </button>
                <button className={classes.button}> Order </button>
            </div>
        </Modal>
    )
};

export default Cart;
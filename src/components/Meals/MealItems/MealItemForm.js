import {useRef, useState} from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const [validState, setAmountValid]  = useState(true);


    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        debugger;
        const enteredAmount = amountInputRef.current.value;
        if(enteredAmount.trim().length == 0 ||
        +enteredAmount < 1 ||
        +enteredAmount > 5)
        {
            setAmountValid(false);
            return;
        }
        
        props.onAddToCart(+enteredAmount);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            label="Amount"
            input={{
                id:'amount',
                type:'number',
                min :'1',
                max :'5',
                step: '1',
                defaultValue: '1'
            }}></Input>
            <button>+ Add</button>
            {!validState && <p>Please enter valid amount</p>}
        </form>
    )
};

export default MealItemForm;
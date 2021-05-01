import React, { Fragment } from 'react';

import image from '../../components/assets/meals.jpg';
import HeaderCardButton from '../Layout/HeaderCardButton';

import classes from  './Header.module.css';
const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1> My Restaurant </h1>
            <HeaderCardButton onClick={props.onShownCart}></HeaderCardButton>
        </header>
        <div className={classes["main-image"]}>
            <img src={image} alt="A table with meal"></img>
        </div>
    </Fragment>
}


export default Header;
import MealsSummary from './MealsSummary';
import MealAvail from './MealsAvailability';
import { Fragment } from 'react';

const Meals = (props) => {
    return <Fragment>
        <MealsSummary/>
        <MealAvail/>
    </Fragment>
} 

export default Meals;
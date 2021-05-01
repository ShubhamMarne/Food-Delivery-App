import classes from './MealsSummary.module.css';

const MealSummary = (props) => {
    return <section className={classes.summary}>
        <h1> Delicious food delivered to you </h1>
        <p>Choose you fav meal from our list</p>
    </section>
}

export default MealSummary;
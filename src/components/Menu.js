import FoodList from "./FoodList";
import classes from "./Menu.module.css";
import AvailableFood from "./AvailableFood";
import Cart from "./Cart";

const Menu = () => {
  const mealsName = AvailableFood.map((meal) => (
    <FoodList
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      photo={meal.photo}
    />
  ));
  return (
    <div className={classes.container}>
      <Cart />
      <div className={classes.meals}> {mealsName}</div>
    </div>
  );
};
export default Menu;

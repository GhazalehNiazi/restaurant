import FoodList from "./FoodList";
import classes from "./Menu.module.css";
import AvailableFood from "./AvailableFood";

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
      {mealsName}
    </div>
  );
};
export default Menu;

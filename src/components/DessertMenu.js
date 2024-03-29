import FoodList from "./FoodList";
import classes from "./Menu.module.css";
import availableDessert from "./availableDessert";
import Cart from "./Cart";
import NavBar from "./NavBar";
import React from "react";
const DessertMenu = () => {
  // printing the AvailableFood in the menu and passing the props to the FoodList
  const mealsName = availableDessert.map((meal) => (
    <FoodList
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      photo={meal.photo}
    />
  ));
  return (
    <React.Fragment>
      <NavBar />
      <div className={classes.container}>
        <Cart />
        <div className={classes.meals}> {mealsName}</div>
      </div>
    </React.Fragment>
  );
};
export default DessertMenu;

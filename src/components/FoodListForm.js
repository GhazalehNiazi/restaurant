import classes from "./FoodListForm.module.css";
const FoodItemForm = () => {
  return (
    <form>
      <label htmlFor="amount" ></label>
      <input id="amount" type="number" step='1' defaultValue='1' min="0" max="6" />
      <div className={classes.buttons}>
        <button>+</button>
        <button>-</button>
      </div>
    </form>
  );
};
export default FoodItemForm;

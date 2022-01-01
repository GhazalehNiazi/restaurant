import FoodList from './FoodList';
import classes from './Menu.module.css'
const Menu = () =>{
return(
    <div className={classes.container}>
    <FoodList></FoodList>
    <FoodList></FoodList>
    <FoodList></FoodList>
    <FoodList></FoodList>
    <FoodList></FoodList>
    </div>
)
}
export default Menu;
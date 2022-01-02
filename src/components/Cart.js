import classes from "./Cart.module.css";
const Cart = (props) => {
  const items = (
   <ul>
     { [{ name: "sushi", amount: 2, price: 6 }].map((item) => (
        <li>{item.name} {item.price}</li>
      ))}
      </ul>
    
  );
  return (
    <div className={classes.container}>
      <div>{items}</div>
      <div>
        <span>total</span>
        <span>$65</span>
      </div>
      <div>
        <button>order</button>
      </div>
    </div>
  );
};
export default Cart;

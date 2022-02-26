import classes from "./Visit.module.css";
import { Link } from "react-router-dom";
const Visit = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <label className={classes.label}>number of guests</label>
        <input type="number" className={classes.input}></input>
        <label className={classes.label}>date</label>
        <input type="date" className={classes.input}></input>
        <label className={classes.label}>time</label>
        <input type="time" className={classes.input}></input>
        <div className={classes.buttons}>
          <Link to="/">
            <button className={classes.button}>cancel</button>{" "}
          </Link>
          <button className={classes.button}>submit</button>
        </div>
      </form>
    </div>
  );
};
export default Visit;

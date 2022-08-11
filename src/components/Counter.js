import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  const incrementHandler = (value) => {
    dispatch({type : "increment", value : value})
  }
  const decrementHandler = (value) => {
    dispatch({type : "decrement", value : value})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler.bind(null, 1)}>Increment</button>
        <button onClick={incrementHandler.bind(null, 10)}>Increment by 10</button>
        <button onClick={decrementHandler.bind(null, 1)}>Decrement</button>
        <button onClick={decrementHandler.bind(null, 5)}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

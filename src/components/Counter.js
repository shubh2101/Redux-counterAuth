import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice"; 
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()
  const incrementHandler = (payload) => {
    dispatch(counterActions.increment(payload))
  }
  const decrementHandler = (payload) => {
    dispatch(counterActions.decrement(payload))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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

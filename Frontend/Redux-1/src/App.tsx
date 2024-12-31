import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppSelector, userAppDispatch } from "./redux/hook";

const App = () => {
  const dispatch = userAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Counter with Redux</h1>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <button onClick={() => handleIncrement(5)}>Increment by 5</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;

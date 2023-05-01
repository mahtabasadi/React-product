import { useReducer } from "react";

const inititalState = {
  firstCounter: 0,
  secondCounter: 0,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return inititalState;
    default:
      return state;
  }
};

const CountReducer = () => {
  const [count, dispatch] = useReducer(Reducer, inititalState);

  return (
    <div>
      <h2>count One is: {count.firstCounter}</h2>
      <h2>count Two is: {count.secondCounter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          addOne
        </button>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          addFive
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "add2", value: 1 })}>
          addOne2
        </button>
        <button onClick={() => dispatch({ type: "add2", value: 5 })}>
          addFive2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrement2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CountReducer;

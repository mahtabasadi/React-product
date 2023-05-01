import { useReducer } from "react";

const inititalState = 0


const Reducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return inititalState;
    default:
      return state;
  }
};

const CountReducer = () => {
  const [count, dispatch] = useReducer(Reducer, inititalState);
  const [counttwo, dispatchtwo] = useReducer(Reducer, inititalState);

  return (
    <div>
      <div>
        <h2>count One is: {count}</h2>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          addOne
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <div>
        <h2>count Two is: {counttwo}</h2>
        <button onClick={() => dispatchtwo({ type: "add", value: 1 })}>
          addOne
        </button>
        <button onClick={() => dispatchtwo({ type: "decrement", value: 1 })}>
          decrement
        </button>
      </div>
      <button onClick={() => dispatchtwo({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CountReducer;

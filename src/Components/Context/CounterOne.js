import { UseCount, UsecountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = UseCount()
  const dispatch = UsecountActions()

  return (
    <div>
      <h2>count One is: {count}</h2>
      <button onClick={()=>dispatch({type:"add" , value:1})}>addOne</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
      <button onClick={()=>dispatch({type:"decrement" , value:1})}>decrement</button>
    </div>
  );
};

export default CounterOne;

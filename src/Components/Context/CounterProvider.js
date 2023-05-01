import React, { useContext, useReducer } from "react";
const countercontext = React.createContext();
const countercontextthispatcher = React.createContext();
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


const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(Reducer, inititalState);
  return (
    <countercontext.Provider value={count}>
      <countercontextthispatcher.Provider value={dispatch}>
        {children}
      </countercontextthispatcher.Provider>
    </countercontext.Provider>
  );
};

export default CounterProvider;

export const UseCount = () => useContext(countercontext);

export const UsecountActions = () => {
return useContext(countercontextthispatcher)
};

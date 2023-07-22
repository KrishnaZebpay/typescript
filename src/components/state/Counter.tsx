import React, { useReducer } from "react";

type CountState = {
  count: number;
};

type  UpdateAction={
    type:'increment'|'decrement'
    payload:number
}

type ResetAction={
    type:'reset'
}

type CountAction = UpdateAction|ResetAction

const initialState = {
  count: 0,
};

function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
        return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Counter-{state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  );
};

export default Counter;

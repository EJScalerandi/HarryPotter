const initialState = {
    counter: "Es el chequeo de que anda el Redux",
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, counter: state.counter + 1 };
      case 'DECREMENT':
        return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
  };
  
  export default reducers;
import {
    SET_ALL_DATA,
} from "./Actions";



const initialState = {
    prueba: "Es el chequeo de que anda el Redux",
    allData: {},
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_DATA:
            return{
                ...state,
                allData: action.payload,
            };
        
        
        default:
        return state;
    }
  };
  
  export default reducers;
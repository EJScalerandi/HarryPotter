import axios from "axios";

export const SET_ALL_DATA = "SET_ALL_DATA";

export const setAllData = ()=>{
    return async (dispatch) =>{
    try {
        const API = "https://hp-api.onrender.com/api/characters";
        const { data } = await axios(API);
        dispatch({
            type: SET_ALL_DATA,
            payload: data
        });
    } catch (error) {
        console.error("error al pedir la data");
        throw error;
    }}
}
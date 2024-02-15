import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Hogwarts from "../../Assets/Hogwarts.png";
import { setAllData } from '../../Redux/Actions';
function MyComponent() {
  const prueba = useSelector(state => state.prueba);
  const allData = useSelector(state => state.allData);
  const dispatch = useDispatch();
  

  useEffect (() => {
    dispatch(setAllData())
  },[])
  console.log(allData)
  return (
    <div>
        <h2>{prueba}</h2>
        <img src={Hogwarts} alt="Hogwarts" />

    </div>
  );
}

export default MyComponent;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function MyComponent() {
  const prueba = useSelector(state => state.prueba);
  const dispatch = useDispatch();



  return (
    <div>
      <h2>{prueba}</h2>

    </div>
  );
}

export default MyComponent;

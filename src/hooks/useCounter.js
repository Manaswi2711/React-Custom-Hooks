import React from 'react'

 export function useCounter(inv,step) {
const[count,setCount]=React.useState(inv)
  function inc(){
    setCount(count+step);
  }
  function dec(){
    setCount(count-step);
  }
  return[count,inc,dec];
};

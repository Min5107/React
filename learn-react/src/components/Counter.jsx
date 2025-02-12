import { useState } from "react";

// 일반적 사용
function Counter({onTotal}){
  const [counter, setCounter] = useState(0);

  const handleCounter = () =>{
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    if(onTotal){
      onTotal();
    }
  }
    return(
      <button onClick={handleCounter}>Counter : {counter}</button>
    )
  }
  export default Counter;
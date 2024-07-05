import React,{useState} from 'react';

function Counter(){

  const [count, setCount] = useState(1);
  
  const increment = () =>{
    setCount(count +1);
  }

  const decrement = () =>{
    setCount(count -1);
  }
  const reset = () =>{
    setCount(0);
  }
  return(
    <div className="counter">
      <p className="display">{count}</p>
      <button className="counterD" onClick={decrement}>Decrement</button>

      <button className="counterI" onClick={increment}>Increment</button>

      <button className="counterR" onClick={reset}>Reset</button>

    </div>

  );


}

export default Counter
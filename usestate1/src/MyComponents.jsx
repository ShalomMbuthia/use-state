import React, {useState} from 'react'

function MyComponent(){

  const [name, setName] = useState("Guest");//the usestate function returns an array with two functions a setter function and a variable

  const [age, setAge] = useState(0);//array destructuring.The value in the usestate bracket is a default value

  const [isEmployed, setIsEmployed] = useState(false);
  
  const updateName = () => {
    setName("SpongeBob");
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }


  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Set Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  );


}

export default MyComponent
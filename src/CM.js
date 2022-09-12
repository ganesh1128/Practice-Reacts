import React, { useCallback, useEffect, useMemo, useState } from 'react'

export default function CM() {
    const [count, setCount] = useState(1);
    const [todo, setTodo] = useState([]);
    const [name, setName] = useState("")
    // const calculation = factorial(count);
    const calculation = useMemo(() => factorial(count), [count])
    const add = useMemo(() => adding(count),[count])    
    // const displayName = () => name;

    const displayName = useCallback(
      () => {
        return name;
      },[name]
    )

   const inc = () => {
        setCount(count + 1)
    }
   const addTodo = () => {
    console.log("this is todo");
    setTodo((o) => [...o, "new todo"])
   }


  return (
    <div>
      <div>
        <h2>My Todo</h2>
        {todo.map((todo, index) => {
          return <h1 key={index}>{todo}</h1>;
        })}
        <button onClick={addTodo}>Add Todo</button>
       
      </div>
      <hr />
      Count : {count}
     <button onClick={inc}>count</button>
      <h1>Expensive Calculation</h1>
      {calculation}
      <div>
        <h1>Count * 2</h1>
        {add}
      </div>
      <div style={{marginTop:"10px"}}>
        <label>Enter Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <DisplayName displayName={displayName}></DisplayName>
      </div>
     
    </div>
  );
}

const DisplayName = ({displayName}) => {
const [value, setValue] = useState("")
useEffect(() =>{
setValue(displayName())
}, [displayName])
console.log("display name");
return <p>{`my name is ${value} `} </p>
}

const adding = (num) => {
  return num * 2
}

const factorial = (number) => {
  if (number < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  } else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
  } else {
   
    let fact = 1;
    for (let i = 1; i <= number; i++) {
     fact = fact * i;
    }
    console.log(`The factorial `);
    return fact
  }
  
};
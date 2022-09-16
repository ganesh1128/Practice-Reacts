import React, { useState } from "react";
import "./App.css";
import CRED from './CRED'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <div className="App">
      <CRED></CRED>
      <Child1 count={count} name={name} setName={setName} />
      <Child2 count={count} setCount={setCount} />
      
    </div>
  );
}

function Child1(props) {
  const { count, name, setName } = props;

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {count} {name}
    </>
  );
}

function Child2(props) {
  const { count, setCount } = props;
  function Add() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function Sub() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <button onClick={Add}>+</button>
      <button onClick={Sub}>-</button>
    </>
  );
}

export default App;

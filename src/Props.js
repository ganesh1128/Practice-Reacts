import React, { useState } from 'react'

function Props() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <Child count={count} setCount={setCount}/>
      <Child1 count={count} setCount={setCount}/>
    </div>
  )
}

function Child(props){
return(
  <>
  {props.count}
  </>
)
}

function Child1(props){
 const {count, setCount} = props
  function clickA(){
    setCount(count + 1)
  }
  function clickS(){
   if(count > 0) setCount(count - 1)
  }
  return(
    <>
    <button onClick={clickA}>+</button>
    <button onClick={clickS}>-</button>
    </>
  )
}

export default Props
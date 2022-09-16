import React, { useReducer, useState } from 'react'

const initialState = {count : 0};

function reducer (state, action) {
  switch (action.type) {
    case 'Incriment':
    return {count: state.count + 1}
    case 'Decriment':
    return {count: state.count - 1}
    default:
       throw new Error()
  }
}


function ReducerCount() {

const [hide, setHide] = useState(false)

const [state, dispatch] = useReducer(reducer, initialState)

function Add(){
  if(state.count <10) dispatch({type: "Incriment"})
}
function Sub(){
  if(state.count > 0) dispatch({type: "Decriment"})
}

function show(){
  setHide(!hide)
}

  return (
    <div>
         {
      hide ? <> Count: {state.count} <button onClick={Add}>+</button> <button onClick={Sub}>-</button> </>: "Click to show"
    }

    <button onClick={show}>Click me</button>

    </div>
  )
}

export default ReducerCount
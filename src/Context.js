import React, { createContext, useContext, useState } from 'react'

const store = createContext()
function Context() {
const [value, setValue] =useState(0)
  return (
    <store.Provider value={[value, setValue]}>
     <div>
     <Component1 />
     <Component2 />
    </div>
    </store.Provider>
  )
}

const Component1 = () => {
    const [value] = useContext(store)
    return(
        <>
        {value}
        </>
    )
}

const Component2 = () => {
    const [value, setValue] = useContext(store)
   function clickA(){
    setValue( value + 1)
   }
   function clickS(){
    if(value > 0) setValue( value - 1)
   }

    return(
        <>
        <button onClick={clickA}>+</button>
        <button onClick={clickS}>-</button>
        </>
    )
}

export default Context
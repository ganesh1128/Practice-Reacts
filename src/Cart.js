import React, { useEffect, useState } from 'react';
import './App.css';
import CRED from './CRED';


function Cart() {

  const products = [
    {
      id:1,
      name:"levi's",
      price:1000

    },
    {
      id:2,
      name:"lp",
      price:2000 
    },
    {
      id:3,
      name:"ucb",
      price:3000
    },
    {
      id:4,
      name:"scullers",
      price:4000
    }
]

const [list, setList] = useState('')
const [isCart, setIsCart] = useState(false)
const [result, setResult] = useState([])



function Add(id){
let newArr = products.filter((item) => item.id == id )
setList(ol => [...ol, newArr])
}



  
function show(){
  setIsCart(!isCart)
}

function remove(id){
  const newA = list.flat(Infinity).filter(el => el.id !== id)
  console.log(newA);
  setList(newA)
}


 
  return (
    <div className="App">
     {
      products.map((el) => {
        return <ul key={el.id} className="parent"><div  className='card'><div>products: {el.name}</div> <div>price: {el.price}</div> <button className='buttonw' onClick={()=>Add(el.id)}>add</button></div></ul>
      })
     }
     <div>
      <h1>CART PRODUCTS</h1>
      {
        isCart && list.length > 0 ? <div >
          {
          list.flat(Infinity).map((el) => {
            console.log(el);
            return <ul key={el.id}>{el.name} <button onClick={()=>remove(el.id)}>-</button></ul> 
          })
        }</div> : "no items"
      }
      <br/>
      <button onClick={show}>cart</button><button>{list.length}</button>
   
     </div>
    </div>
  );
}

export default Cart;
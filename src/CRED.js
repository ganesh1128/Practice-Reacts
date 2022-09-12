import React, { useState } from 'react'

function CRED() {

    const [todo, setTodo] = useState('')
    const [data, setData] = useState([])
    const [isEdit, setIsEdit] = useState(true)
    const [editTodo, setEditTodo] = useState(null)
   
    const AddTodo = () => {
      if(!todo){
        return alert("Add todo")
      }else if(todo && !isEdit){
        setData(
          data.map((el) => {
            if(el.id == editTodo){
              return {...el, value:todo}
            }
            return el
          })
        )
        setIsEdit(true)
        setTodo('')

      }else{
        const item = {
          id : Math.floor(Math.random() * 1000),
          value : todo
      }
      setData([...data, item])
      setTodo('')

      }
        
      
   
   }
    // console.log(data);

    const onEdit = (id) => {
      console.log(id)
      const editArr = data.find(todo => todo.id == id)
      console.log(editArr.value);
      setTodo(editArr.value)
      setIsEdit(false)
      setEditTodo(id)

    }

   const Delete = (id) => {
     console.log(id)
     const newArr = data.filter(datas => datas.id !== id)
     setData(newArr)
    console.log(newArr);
     setTodo('')
   }


  return (
    <div>
          <input type='text' value={todo} onChange={(e) => setTodo(e.target.value) } />
          {isEdit ? <button onClick={AddTodo}>Add</button> : <button onClick={AddTodo}>Update</button>}
          <div>
            {
                data.map((el) => {
                    return <ul key={el.id}>{el.value} <span><button onClick={()=>Delete(el.id)}>X</button></span> <span><button onClick={()=>onEdit(el.id)}>Edit</button></span> </ul>
                })
            }
          </div>
    </div>
  )
}

export default CRED
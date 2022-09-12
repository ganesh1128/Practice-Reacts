import { useState } from 'react';
import './App.css';

function Prac() {
  const [items, setItems] = useState('')
  const [todos, setTodo] = useState([])
  const [isEdit, setIsEdit] = useState(true)
  const [editItem, setEditItem] = useState(null)

  function addTodo() {
    if (!items) {
      return alert("Add item")
    }
    else if (items && !isEdit) {
      setTodo(
        todos.map((ele) => {
          if (ele.id == editItem) {
            return {...ele, value:items}
          }
          return ele
        })
      )
      setIsEdit(true)
      setItems('')
    } else {
      const todo = {
        id: Math.floor(Math.random() * 100),
        value: items
      }
      setTodo([...todos, todo])
      setItems('')
    }
  }


  function Edit(id) {
    const editArr = todos.find(todo => todo.id == id)
    setIsEdit(false)
    setItems(editArr.value)
    setEditItem(id)
  }

  function Delete(id) {
    console.log(id);
    const newArr = todos.filter(todo => todo.id !== id)
    setTodo(newArr)
    setItems('')
  }

  return (
    <div className="App">
      <input
        type="text"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
      {
        isEdit ? <button style={{ marginLeft: "5px" }} onClick={addTodo}>Add</button> : <button style={{ marginLeft: "5px" }} onClick={addTodo}>Update</button>
      }
      <ul>
        {todos.map((i) => {
          return <li style={{ marginTop: "10px" }} key={i.id}>
            <span style={{ marginTop: "10px", marginRight: "5px" }}>{i.value}</span>
            <button style={{ marginTop: "10px", marginRight: "5px" }} onClick={() => Edit(i.id)}>Edit</button>
            <button style={{ marginTop: "10px", marginRight: "5px" }} onClick={() => Delete(i.id)} >X</button>
          </li>
        })}

      </ul>
    </div>
  );
}

export default Prac;

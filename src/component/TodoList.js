import React, { useState } from 'react'


const TodoList =()=>{
const [task,setTak] = useState('')
const [todos,setTodos] = useState([])


function AddTodohandler(){
  setTodos(todos=>[...todos,{
    id:todos.length?todos[todos.length-1].id+1:1,title:task
  }])
  setTak('')
}

function removeList(id){
  setTodos(todos.filter(todo=>todo.id !==id))
}


return(
  <div>

    {todos.map(todo=><ul key={todo.id}>
      <li>
        {todo.title} 
        <hr/>
        <span  style={{color:'red'}} onClick={()=>removeList(todo.id)}>
          delete
        </span>
      </li>
    </ul>)}
    <input type="text" value={task} onChange={e=>setTak(e.target.value)}/>
    <button onClick={()=>AddTodohandler()}>
      add task
    </button>
  </div>
)
}

export default TodoList;
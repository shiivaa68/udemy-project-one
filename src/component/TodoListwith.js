import React, { useReducer, useState } from 'react'


function reducer(state,action){
    switch(action.type){
        case 'ADD':
        return [...state,{id:state.length?state[state.length-1].id+1:1,title:action.payload}]

         case 'REMOVE':
             return state.filter(todo=>todo.id !== action.payload)

        default:
            throw new Error('ACTONNIST')
    }
}


const TodoListwith=()=>{

const [task,setTak] =useState('')
const[state,dispatch] =useReducer(reducer,[])


function addTodo(){
    dispatch({
        type:'ADD',
        payload:task
    })
    setTak('')
}
function removeHandler(id){
    dispatch({
        type:'REMOVE',payload:id
    })
}

return(
    <div>

        {state.map(el=><ul key={el.id}>
            <li>
                {el.title}
                <hr/>
                <span style={{background:'lightgray'}} onClick={()=>removeHandler(el.id)}>
                    deletee
                </span>
            </li>
        </ul>)}
        <input type="text" value={task} onChange={e=>setTak(e.target.value)}/>
        <button onClick={()=>addTodo()}>add task </button>

    </div>
)
}

export default TodoListwith;
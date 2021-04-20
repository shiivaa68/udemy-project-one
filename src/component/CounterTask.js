import React, { useState } from 'react'

const CounterTask =()=>{

const [tasks,setTask] =useState([]);
const [count,setCount] = useState(0)


const generateTask = ()=> {
    const time =(new Date()).getTime();
    return{
        task:`task ${time}`,
        id:time
    }
}

 function addTadk(){
    setTask({tasks:[
        ...tasks,
        generateTask()
       
    
    ]
   
})
setCount({count:count.length})
}
console.log(tasks,'tasks')

    return<div>
       <button onClick={()=>addTadk()}>
           ADD TASK
       </button>
       <hr/>
       count:{count}
       <hr/>
{tasks.map(el=><ul>
    <li>
        {el.task}
    </li>
</ul>)}
    </div>
}

export default CounterTask;
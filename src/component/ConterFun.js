import React, { useState } from 'react'



const CounterFun = ()=>{

const [count,setCount] = useState(0)


function handleAdd(){

    setCount(count+1)
}


    return(
        <di>
            <span>
              {count}
            </span>
            <button onClick={handleAdd}>
                +
            </button>
        </di>
    )
}

export default CounterFun;
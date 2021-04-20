import React, { useEffect, useState } from 'react';


const CounterInterval =()=>{

const[counter,setCounter] = useState(0)



useEffect(()=>{

    const interId = setInterval(()=>setCounter(counter=>counter+1),1000)

return()=>{
    clearInterval(interId)
}
},[])


    return(
        <div>
{counter}
        </div>
    )
}
export default CounterInterval;
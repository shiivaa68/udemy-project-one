import React, { useEffect, useRef, useState } from 'react'





const CreateRef = ()=>{

const [show,setShow] = useState(false)


const textinput = useRef();

useEffect(()=>{
   
    textinput.current.focus()
    
},[])

return(
  <div>
   <input type="text"  ref={textinput} placeholder="search" style={{display:show?'inline':'none'}}/>
    <button onClick={()=>setShow(!show)}>search</button>
  </div>
)

}

export default CreateRef;
import React, { useRef, useState } from 'react';



const DivShow = ()=>{

    const [show,setShow] = useState(false);

    

    return (
        <div>
            <div style={{display:show?'inline':'none'}} >
                hey man div hastsm
            </div>

            <button onClick={()=>setShow(!show)}>toggle buttom </button>
        </div>
    )
}

export default DivShow;
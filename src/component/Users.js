import React, { useState } from 'react'



const Users =()=> {

const lists =[{
    id:1,name:'shiva'
},{
    id:2,name:'donya'
}]



// const [lists,setList] = useState(data)


    return(
        <div>
            {/* {lists.map(el=><User key={el.id} user={el}/>)} */}
{lists.map(el=><ul key={el.id}>
    <li>{el.name}</li>
</ul>)}
        </div>
    )
}


export default Users




function User({user}){
    return(
        <div>
            <span>
                name:{user.name}
            </span>
        </div>
    )
}
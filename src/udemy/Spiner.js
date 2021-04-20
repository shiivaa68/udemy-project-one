import React from 'react'



const Spiner = (props)=>{
    return(
     
        <div class="ui active dimmer">
          <div class="ui big text loader">{props.message}</div>
        </div>
    
     
    )
}

Spiner.defaultProps = {
    message:'loading...'
}

export default Spiner;
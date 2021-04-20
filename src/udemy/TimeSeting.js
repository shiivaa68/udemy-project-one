import React, { Component } from 'react'



class TimeSeting extends Component{

state={
    time:''
}

componentDidMount(){
setInterval(()=>{

this.setState({time:new Date().toLocaleTimeString()})

},1000)
}




    render(){
        return(
<div>
THE TIME SHOW:{this.state.time}
</div>
        )
    }
}

export default TimeSeting;
import React, { Component } from 'react';



class Counter extends Component{
    constructor(props){
        super(props)

        this.state = {
            counter:0
        }
    }

    render(){
        return(
            <div>
                {this.state.counter}
                <button onClick={()=>this.setState({counter:this.state.counter+1})}>+</button>
            </div>
        )
    }
}

export default Counter;
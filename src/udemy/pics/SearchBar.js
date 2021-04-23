import React, { Component } from 'react'

class SearchBar extends Component{

state = {
    term :''
}

handleSubmit = (event) =>{
    event.preventDefault();
   this.props.onSubmit(this.state.term)

}

    render(){
        return(
            <div className="ui segment">
            <form className="ui form" onSubmit={this.handleSubmit} >
                <div className="field">
                    <label>Image search</label>
                <input text="text" value={this.state.term} onChange={event=>this.setState({term:event.target.value})}/>
                </div>
              
            </form>
            </div>
        )
    }
}

export default SearchBar;
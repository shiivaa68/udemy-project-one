import React, { Component } from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spiner from './Spiner'


class Geogtaphy extends Component{
        state ={
            lat:null,
            errorMessage:''
        }
    
    
componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position) =>this.setState({lat:position.coords.latitude}),
        (err)=>this.setState({errorMessage:err.message}));
}
    render(){
      

  if(this.state.errorMessage&&!this.state.lat){
      return(<div>ERROR:{this.state.errorMessage}</div>)
  }
  if(!this.state.errorMessage&&this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
  }

        //     <div>
        //  <SeasonDisplay lat={this.state.lat}/>
        //   {this.state.errorMessage?<p>error:{this.state.errorMessage}</p>:''}
        //     </div>
        return <di><Spiner message="accept the request loacation please"/></di>
    }
}

export default Geogtaphy;
import { Component } from 'react';
import './App.css';
import SearchBar from './udemy/searchutub/SearchBar'
import youtube from './udemy/searchutub/api/Youtube'
import VideoList from './udemy/searchutub/VideoList'
import VideoDetail from  './udemy/searchutub/VideoDetail'

class App extends Component{


state ={videos :[],
  selectedVideo:null}

componentDidMount(){
  this.onTermSubmit('buildings')
}




onTermSubmit = (term)=>{
  youtube.get('/search',{
    params:{
      q:term
    }
  }).then(
    response =>this.setState({videos:response.data.items,
    selectedVideo:response.data.items[0]
    
    })
  )
}

onVideoSelect = (video) => {
this.setState({selectedVideo:video})

console.log(this.selectedVideo,'selectedVideo')
console.log(video,'vidio app js')
}



  render() {
    return (
       <div className="ui container" style={{marginTop:'20px'}}>
     <SearchBar onFormSubmit ={this.onTermSubmit}/>
   <div className="ui grid">
<div className="ui row">

  <div className="eleven wide column">
  <VideoDetail video={ this.state.selectedVideo}/>
  </div>
  <div className="five wide column">
  <VideoList onVideoSelect={this.onVideoSelect}  videos ={this.state.videos}/>

  </div>
   </div>
   </div>
     </div>
  
    );
  
}}

export default App;

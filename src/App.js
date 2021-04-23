import { Component } from 'react';
import './App.css';
// import './style.css'
// import Counter from './component/Counter'
// import CounterFun from './component/ConterFun'
// import CreateRef from './component/--CreateRef'
// import DivShow from './component/DivShow'
// import CounterInterval from './component/CounterInterval'
// import Users from './component/Users';
// import Diagram from './main/Diagram'
import Geogtaphy from './udemy/Locations/Geogtaphy';
import TimeSeting from './udemy/Locations/TimeSeting'
import SearchBar from './udemy/pics/SearchBar'
import unsplash from './udemy/api/unsplash'
import ImageList from './udemy/pics/ImageList'
// function App() {

//   return (
//     <div className="App">
//       {/* practice one get location*/}
//      {/* <Geogtaphy/> */}
//      {/* <TimeSeting/> */}
   
//      <div className="ui container" style={{marginTop:'20px'}}>
//          {/* practice two pics */}
//      <SearchBar/>
//      </div>

//     </div>
//   );
// }

class App extends Component{

  // onSearchSubmit(term){
  //  axios.get('https://api.unsplash.com/search/photos',{
  //    params:{query:term},
  //    headers:{
  //      Authorization:'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296'
       
  //    }
  //  })
  //  .then()
  // }

state={
  images:[]
}


onSearchSubmit = async (term) => {
  const response = await unsplash.get('/search/photos', {
    params: { query: term },
  });

  this.setState({ images: response.data.results });
};



  // onSearchSubmit(term) {
  //   unsplash.get('/search/photos', {
  //     params: { query: term },
    
  //   }).then((response)=>{
  //   this.setState({Images:response.data.results})

  //   })
  // }

//   async onSearchSubmit(term) {
//  const response = await  axios.get('https://api.unsplash.com/search/photos', {
//       params: { query: term },
//       headers: {
//         Authorization:
//           'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296',
//       },
//     })


//     console.log(response.data.results)
//   }


  render() {
    return (
      <div className="ui container" style={{marginTop:'20px'}}>
         {/* practice two pics */}
     <SearchBar onSubmit={this.onSearchSubmit}/>
     <ImageList images={this.state.images}/>
    
     </div>
  
    );
  
}}

export default App;

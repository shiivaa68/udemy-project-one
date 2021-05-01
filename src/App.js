
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Accordion from './udemy/hook-udemy/Accordion'
import Search from './udemy/hook-udemy/Search';
import DropDown from './udemy/hook-udemy/DropDown'
import { useState } from 'react';
import Translate from './udemy/hook-udemy/Translate'
import Header from './udemy/hook-udemy/Header'

const App = ()=>{


const items = [{
  title:'what is react',
  content:'liabarary is react '
},
{
  title:'why is react',
  content:'react is easy'
},
{
  title:'what is component',
  content:'usable code'
}
]

const options =[{
  label:'the color red',
  color:'red'
},{
  label:'the color green',
  color:'green'
},

{label:'the color blue',
color:'blue'
}
]


const [selected,setSelected] = useState(options[0])
const [showDropDown,setShowDropdown] = useState(true)

  return(
 
  <div className="ui container">
     
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/" exact>  <Accordion items={items}/></Route>
      <Route path="/search" exact>  <Search/></Route>
      <Route path="/translate" exact><Translate/></Route>
      <Route path="/dropdown" exact><DropDown options={options} selected={selected} onSelectedChange={setSelected}/></Route>
    </Switch>
 


  {/* <button onClick ={()=>setShowDropdown(!showDropDown)}>show toggle drop down</button>
  {showDropDown ? <DropDown options={options} selected={selected} onSelectedChange={setSelected}/> :null} */}

  </BrowserRouter>
  </div>
  )
}
export default App;

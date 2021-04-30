
import './App.css';
import Accordion from './udemy/hook-udemy/Accordion'
import Search from './udemy/hook-udemy/Search';
import DropDown from './udemy/hook-udemy/DropDown'
import { useState } from 'react';
import Translate from './udemy/hook-udemy/Translate'
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

  {/* <Accordion items={items}/> */}
  {/* <Search/> */}
  {/* <button onClick ={()=>setShowDropdown(!showDropDown)}>show toggle drop down</button>
  {showDropDown ? <DropDown options={options} selected={selected} onSelectedChange={setSelected}/> :null} */}
  <Translate/>
  </div>
  )
}
export default App;

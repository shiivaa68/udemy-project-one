import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search =()=>{

    const [term,setTerm] = useState('programing');
    const [debouncedTerm,setDebouncedTerm] = useState(term);
    const[results,setResult] =useState([])
   

//     useEffect(()=>{
//   axios.get('https://en.wikipedia.org/w/api.php',{
//     params:{
//         action:'query',
//         list:'search',
//         origin:'*',
//         format:'json',
//         srsearch:term,
//     }
// }).then(response=>setResult(response.data.query.search))

//     },[term])

useEffect(()=>{
    const timerId = setTimeout(()=>{
        setDebouncedTerm(term)
    },1000)

    return ()=>{
        clearTimeout(timerId)
    }
},[term]);


useEffect(()=>{
    const search = async ()=>{
        const {data} =await axios.get('https://en.wikipedia.org/w/api.php',{

        params:{
            action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:debouncedTerm,
        }
        });

        setResult(data.query.search)
    };

    search()
},[debouncedTerm])



//without debounceterm 
// useEffect(()=>{
//     const search = async ()=>{
//         const {data} =await axios.get('https://en.wikipedia.org/w/api.php',{

//         params:{
//             action:'query',
//                     list:'search',
//                     origin:'*',
//                     format:'json',
//                     srsearch:term,
//         }
//         });

//         setResult(data.query.search)
//     };


//       if(term && !search.length){
//           search()
//       }else{

//         const timeoutId =setTimeout(()=>{
//             if(term){
//                 search()
//             }
//         },1000)
    
    
//       return()=>{
//           clearTimeout(timeoutId)
//       }
//       }

// },[term,results.length])

   


 const renderList = results.map((result)=>{
     return(
         <div className='item' key={result.pageid}>
             <div className="right floated content">
<a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
             </div>
             <div className='content'>
                 <div className='header'>
                    {result.title}
                 </div>
                 <span dangerouslySetInnerHTML={{__html:result.snippet}}>
                 </span>
                
             </div>
         </div>
     )
 })

    return(
        <div>
         <div className="ui form ">
             <div className="field">
                 <label>enter search term</label>
                 <input className="input" value={term} onChange={(e)=>setTerm(e.target.value)}/>

             </div>

         </div>
         <div className='ui celled list'>
             {renderList}
         </div>
        </div>
    )
}

export default Search;
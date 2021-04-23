import React from 'react'
import './style.css'

import ImageCart from './ImageCart'



const ImageList = (props)=>{
const images = props.images.map(image=>{
    return <ImageCart  key={image.id} image={image }/>
});


return <div className="image-list">{images}</div>

    // return(
    //     <div>
    //        {props.images.map(image=>{
    //            return <img src={image.urls.regular}/>
    //        }) }
    //     </div>
    // )
}

export default ImageList;
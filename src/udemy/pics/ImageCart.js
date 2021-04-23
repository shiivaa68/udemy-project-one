import React, { Component } from 'react'

class ImageCart  extends Component{

    constructor(props){
        super(props);

        this.imageRef = React.createRef()
        this.state = {
            spans:0
        }
    }

    componentDidMount(){
        const height= this.imageRef.current.addEventListener('Load',this.setSpans);
          const spans =Math.ceil(height/10) 

            this.setState({spans})
    }


    setSpans=()=>{
        console.log(this.imageRef.current.clientHeight)
    }

    render(){
        const {description,urls}=this.props.image;
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img
                alt={description}
                src={urls.regular}
                ref={this.imageRef }
                />
            </div>
        )
    }
}

export default ImageCart
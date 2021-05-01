import React from 'react'
import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Accordion</Link>
           <Link to="/search" className="item">search</Link>
           <Link to="/dropdown" className="item">dropdown</Link>
           <Link to="/translate" className="item">translate</Link>

        </div>
    )
}

export default Header;
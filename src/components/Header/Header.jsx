import React from 'react'
import './header.css'


function Header(props){
    return(
        <div className='header'>
                <h1>{props.hello}</h1>
        </div>
    )
}

export default Header
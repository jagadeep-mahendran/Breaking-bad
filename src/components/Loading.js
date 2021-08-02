import React from 'react'
import spinner from '../img/spinner.gif';

const Loading = () => {
    return (
        <img 
            src={spinner} 
            style= {{width : '200px', margin : 'auto' , display : 'block'}}
            alt='Loading...'
        />
    )
}

export default Loading

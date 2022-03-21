import React from 'react'
import './Gif.css'
import { Link } from 'wouter'


//Export default ES7
function Gif({ title, id, url }){
    return (
        <div className='Gif'>
            <Link to={`/gif/${id}`} className='Gif-link' >
                <h4>{title}</h4>
                <img loading='lazy' alt={title} src={url} />
            </Link>  
        </div>
        
    )
}

export default React.memo(Gif, (prevPops, nextProps) => {
    return prevPops.id === nextProps.id;
});
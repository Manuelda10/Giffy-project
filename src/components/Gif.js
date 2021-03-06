import React from 'react'
import './Gif.css'
import { Link } from 'wouter'
import Fav from 'components/Fav'

//Export default ES7
function Gif({ title, id, url }){
    return (
        <div className='Gif'>
            <div className='Gif-buttons'>
                <Fav id={id}></Fav>
            </div>
            <Link to={`/gif/${id}`} className='Gif-link' >
                <h5>{title}</h5>
                <img loading='lazy' alt={title} src={url} />
            </Link>  
        </div>
        
    )
}

export default React.memo(Gif, (prevPops, nextProps) => {
    return prevPops.id === nextProps.id;
});
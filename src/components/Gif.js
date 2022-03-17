import React from 'react'
import './Gif.css'


//Export default ES7
export default function Gif({ title, id, url }){
    return (
        <a href={`#${id}`} className='Gif'>
            <h4>{title}</h4>
            <img alt={title} src={url} />
        </a>  
    )
}
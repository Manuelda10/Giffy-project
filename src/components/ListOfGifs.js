import React from 'react'
import Gif from './Gif'

export default function ListOfGifs({ gifs }) {

    return (
        <div>
            {
                gifs.map(({ id, title, url }) =>
                    <Gif
                        key={id}
                        title={title}
                        url={url}
                        id={id}
                    />
                )
            }
        </div>
    ) 
}
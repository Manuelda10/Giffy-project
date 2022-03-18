import React, { useState } from 'react'
import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import useGifs from 'hooks/useGifs';

export default function Home() {

    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs();



    const handleSubmit = (e) => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`);
        console.log(keyword);
    }

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <>
            <h3 className='App-title'>Los gifs más populares</h3>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={keyword} type='text' placeholder='Ingresa el gif a buscar'/>
            </form>
            <h3 className='App-title'>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className='App-title'>Los gifs más populares</h3>
            <TrendingSearches/>
        </>
    )
}
import React, { useCallback } from 'react'
import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import useGifs from 'hooks/useGifs';
import SearchForm from 'components/SearchForm';
import Helmet from 'react-helmet';

export default function Home() {

    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs();

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`);
    }, [pushLocation]);

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <h3 className='App-title'>Los gifs más populares</h3>
            <SearchForm onSubmit={handleSubmit} />

            <h3 className='App-title'>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className='App-title'>Los gifs más populares</h3>
            <TrendingSearches/>
        </>
    )
}
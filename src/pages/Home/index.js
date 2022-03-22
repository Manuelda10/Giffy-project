import React from 'react'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import useGifs from 'hooks/useGifs';
import SearchForm from 'components/SearchForm';
import Helmet from 'react-helmet';

export default function Home() {

    const { gifs } = useGifs();

    //No olvidar las canonicals link para indicar cuál es la url buena. (indicarla en Helmet)
    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <h3 className='App-title'>Los gifs más populares</h3>
            <SearchForm />

            <h3 className='App-title'>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className='App-title'>Los gifs más populares</h3>
            <TrendingSearches/>
        </>
    )
}
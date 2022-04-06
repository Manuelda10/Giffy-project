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
            <SearchForm />
            <div className='home-content'>
                <div className='gifs-content'>
                    <h3 className='gifs-content-title'>Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className='tendencias-content'>
                    <TrendingSearches/>
                </div>
            </div>
        </>
    )
}
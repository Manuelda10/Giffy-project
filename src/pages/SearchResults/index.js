import React from 'react'
import ListOfGifs from 'components/ListOfGifs';
import useGifs from 'hooks/useGifs';

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    }

    return <>
        {
            loading
                ? <h2>Cargando</h2>
                : <>
                    <h3>{decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs} />
                </>
        }
        <br></br>
        <button onClick={handleNextPage}>Get next page</button>
    </>
        
}
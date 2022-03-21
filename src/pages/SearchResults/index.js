import React, {useCallback, useEffect, useRef} from 'react'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import useSEO from 'hooks/useSEO';
import Helmet from 'react-helmet';

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once : false
    });
    
    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

    useSEO({title})

    const debounceHandleNextPage = useCallback (debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage]);

    useEffect(function () {
        console.log(isNearScreen);
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen]);

    return <>
        {
            loading
                ? <h2>Cargando</h2>
                : <>
                    <Helmet>
                        <title>{title}</title>
                        <meta name='description' content={title}/>
                    </Helmet>
                    <h3>{decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs} />  
                    <div id='visor' ref={externalRef}></div>
                </>
        }
        <br></br>
    </>
        
}
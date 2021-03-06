import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0;

export default function useGifs({keyword, rating} = {keyword : null} ) {
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext);
    const [ page, setPage ] = useState(INITIAL_PAGE);

    const keywordToUse = keyword
            || localStorage.getItem("lastKeyword")
            || 'random'; // Recuperamos kw del ls

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword: keywordToUse, rating })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                if (keyword) localStorage.setItem("lastKeyword", keyword); //Guardamos la kw del ls
        })
    }, [keyword, keywordToUse, setGifs, rating])

    useEffect(function () {
        if (page === INITIAL_PAGE) return 

        setLoadingNextPage(true)
        getGifs({ keyword: keywordToUse, page, rating })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs));
                setLoadingNextPage(false)
            })
            
    }, [keywordToUse ,page, setGifs, rating]);

    return {loading, loadingNextPage, gifs, setPage}
}
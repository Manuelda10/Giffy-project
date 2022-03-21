import useGifs from 'hooks/useGifs'; 
import { useEffect, useState } from 'react';
import getSingleGif from 'services/getSingleGif';

export default function useSingleGif({ id }) {
    const { gifs } = useGifs()
    const gifFromCache = gifs.find(singleGif => singleGif.id === id);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [gif, setGif] = useState(gifFromCache);

    useEffect(function () {
        if (!gif) {
            setIsLoading(true);
            //Llamar al servicio si no tenemos gif
            getSingleGif({ id })
                .then(gif => {
                    setGif(gif);
                    setIsLoading(false);
                    setIsError(false);
                })
                .catch(err => {
                    setIsLoading(false);
                    setIsError(true)
                })
        }
    }, [gif, id])

    return {gif, isLoading, isError};
}
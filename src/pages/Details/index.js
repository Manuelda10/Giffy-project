import React from 'react'
import Gif from 'components/Gif';
import useSingleGif from 'hooks/useSingleGif';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';
import TrendingSearches from 'components/TrendingSearches/TrendingSearches';

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id });
    const title = gif ? gif.title : '';

    const gifcontentStyle = {
        marginTop: "1rem",
        padding: "1rem"
    }


    if (isLoading) return (
        <>
            <Helmet>
                <title>Cargando...</title>
            </Helmet>
            <h2>Cargando</h2>
        </>  
    ) 
    if (isError) return <Redirect to='/404'/>
    if (!gif) return null; 

    return (
        <>
            <Helmet>
                <title>{title} || Giffy </title>
            </Helmet>
            <div className='home-content'>
                <div className='gifs-content' style={gifcontentStyle}>
                    <Gif {...gif}/>
                </div>
                <div className='tendencias-content'>
                    <TrendingSearches/>
                </div>
                
            </div>
            
        </>
        
    )
}
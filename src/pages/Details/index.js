import React from 'react'
import Gif from 'components/Gif';
import useSingleGif from 'hooks/useSingleGif';
import { Redirect } from 'wouter';
import useSEO from 'hooks/useSEO';
import { Helmet } from 'react-helmet';

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id });
    const title = gif ? gif.title : '';


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
            <Gif {...gif}/>
        </>
        
    )
}
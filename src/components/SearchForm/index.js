import React from 'react';
import { useLocation } from 'wouter';
import useForm from './hook';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

export function SearchForm({initialRating, initialKeyword = ''} = {}) {
    // const [rating, setRating] = useState(initialRating);
    // me volé times de useForm, podría incluirlo
    const { keyword, rating, updateKeyword, updateRating } = useForm({initialKeyword, initialRating});
 
    const [, pushLocation] = useLocation();


    /*Si no hay una keyword de entrada, busca a Messi*/ 
     const handleSubmit = (e) => {
         e.preventDefault();
         if (keyword === '') {
             pushLocation(`/search/Messi/${rating}`);
         } else {
             pushLocation(`/search/${keyword}/${rating}`);
         }
    }

    const handleChange = (e) => {
        updateKeyword(e.target.value);
    }

    const handleChangeRating = e => {
        updateRating(e.target.value)
    }


    /*<small>{times}</small> ---> va al final del select*/
    return (
        <form className='search-form' onSubmit={handleSubmit}>
                <button>Buscar</button>
            <input onChange={handleChange} value={keyword} type='text' placeholder='Ingresa el gif a buscar' />
            <select value={rating} onChange={handleChangeRating}>
                {RATINGS.map(rating => <option key={rating}>
                    {rating}
                </option>)}
            </select>
            
        </form>
    )
}

export default React.memo(SearchForm); 
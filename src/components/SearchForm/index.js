import React from 'react';
import { useLocation } from 'wouter';
import useForm from './hook';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

export function SearchForm({initialRating, initialKeyword = ''}) {
    // const [rating, setRating] = useState(initialRating);
    const { keyword, rating, times, updateKeyword, updateRating } = useForm({initialKeyword, initialRating});
 
    const [path, pushLocation] = useLocation();

     const handleSubmit = (e) => {
         e.preventDefault();
         pushLocation(`/search/${keyword}/${rating}`);
    }

    const handleChange = (e) => {
        updateKeyword(e.target.value);
    }

    const handleChangeRating = e => {
        updateRating(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
                <button>Buscar</button>
            <input onChange={handleChange} value={keyword} type='text' placeholder='Ingresa el gif a buscar' />
            <select value={rating} onChange={handleChangeRating}>
                {RATINGS.map(rating => <option key={rating}>
                    {rating}
                </option>)}
            </select>
            <small>{times}</small>
        </form>
    )
}

export default React.memo(SearchForm); 
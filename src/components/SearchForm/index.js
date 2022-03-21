import React, { useState } from 'react';

export function SearchForm({onSubmit}) {
    const [keyword, setKeyword] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault();
         onSubmit({ keyword });
    }

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input onChange={handleChange} value={keyword} type='text' placeholder='Ingresa el gif a buscar'/>
        </form>
    )
}

export default React.memo(SearchForm); 
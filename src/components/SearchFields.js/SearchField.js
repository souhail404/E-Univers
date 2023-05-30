import React, { useState } from 'react'
import './style.css';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const SearchField = ({ classNames }) => {
    const [result , setResult] = useState([])
    const [isActive , setIsActive] = useState(' notactive')

    return (
        <div className={'search-field ' + classNames + isActive }>
            <SearchBar setResult={setResult} setIsActive={setIsActive} isActive={isActive} />
            <SearchResult result={result}/>
        </div>
    )
}

export default SearchField
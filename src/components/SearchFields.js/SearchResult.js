import React from 'react'
import { Link } from 'react-router-dom';

const SearchResult = ({result}) => {
  return (
    <div className="search-result">
        <div className="results-wrapper">
            { result.map((re, index)=>{
                return <Link className='result-link' key={index} > {re.name} </Link>
            }) }
            
            
        </div>
    </div>
  )
}

export default SearchResult
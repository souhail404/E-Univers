import React,  { useRef, useState } from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import {AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'


const HeaderSearchField = ({ classNames }) => {
    const [result , setResult] = useState([])
    const [isActive , setIsActive] = useState(' notactive')

    return (
        <div className={'search-field-wrpr ' + classNames + isActive }>
            <SearchInput setResult={setResult} setIsActive={setIsActive} isActive={isActive} />
            <SearchResultMenu result={result}/>
        </div>
    )
}


const SearchInput = ({ setResult, setIsActive }) => {
    const [searchInput , setSearchInput] = useState("");
    const searchbar = useRef()

    const fetchData = (value) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                const results =json.filter((user) =>{
                    return ( value && user && user.name && user.name.toLowerCase().includes(value) );
                });
                setResult(results);
            });
    } 
    
    const handleChange = (value) => {
        setSearchInput(value);
        fetchData(value);
        setIsActive(' active')
    }
    const handleCancel = () => {
        searchbar.current.value = '';
        setSearchInput([]);
        setIsActive(' notactive')
    }
    const handleSearch = () => {
        searchbar.current.focus()
        setIsActive(' active')
    }
  return (
    <div className="search-input-wrpr">
        <input className='search-bar' ref={searchbar} type="text" placeholder='Search ...' onChange={(e)=> handleChange(e.target.value)} />
        <AiOutlineSearch  className='search-icon' onClick={()=> handleSearch(' active')}/>
        <AiOutlineClose className='cancel-icon' onClick={()=> handleCancel()} />
    </div>
  )
}


const SearchResultMenu = ({result}) => {
    return (
      <div className="result-menu-wrpr">
          <div className="results-menu">
              { result.map((re, index)=>{
                  return <Link className='result-link' key={index} > {re.name} </Link>
              }) }
              
              
          </div>
      </div>
    )
  }  

export default HeaderSearchField
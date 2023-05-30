import React,  { useRef, useState } from 'react'
import {AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

const SearchBar = ({ setResult, setIsActive }) => {
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
    <div className="input-wrapper">
        <input className='search-bar' ref={searchbar} type="text" placeholder='Search ...' onChange={(e)=> handleChange(e.target.value)} />
        <AiOutlineSearch  className='search-icon' onClick={()=> handleSearch(' active')}/>
        <AiOutlineClose className='cancel-icon' onClick={()=> handleCancel()} />
    </div>
  )
}

export default SearchBar
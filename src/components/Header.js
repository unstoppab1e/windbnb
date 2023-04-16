import React, { useState } from 'react';
import "./header.css";
import link from '../stays.json';

export const Header = () => {
    const data = JSON.parse(JSON.stringify(link))
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    if(search.length > 0){
        data.filter((title) => {
            console.log(title);
            return title.match(search);
            
        })
    }

  return (
    <div className='header'>
        <div className='logo'>
            <img src="./logo.svg" alt="logo" />
        </div>
        <div className='searchBar'>
            <input type="text" placeholder="Search here" onChange={handleChange} value={search} />
        </div>
    </div>
  )
}

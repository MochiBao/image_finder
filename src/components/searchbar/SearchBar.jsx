import React, { useEffect, useState } from 'react'
import s from './searchBar.module.css'

const SearchBar = ({plusInputValue}) => {
    const [dataInput, setDataInput] = useState("");

    const input = (e) => {
        setDataInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        plusInputValue(dataInput);
    };

    return (
        <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
      
          <input onChange={input}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }

export default SearchBar;

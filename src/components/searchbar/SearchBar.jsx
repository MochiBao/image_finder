import React, { useEffect, useState, useContext } from 'react'
import s from './searchBar.module.css'
import { xz } from '../../App';


const SearchBar = ({plusInputValue}) => {
    const [dataInput, setDataInput] = useState("");

    const inputt = useContext(xz);

    const input = (e) => {
        setDataInput(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        inputt(dataInput);
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

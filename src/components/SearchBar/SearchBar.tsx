import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from "react-icons/fa";
import { FC } from "react";

import css from "./SearchBar.module.css";


interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;

        if (query.trim() === "") {
            toast.error("Please enter a search term!");
            return;
          }
      
          onSubmit(query);
          form.reset();
    
    }

    const handleChange = (evt) => {
        setQuery(evt.target.value);
      };

      return (
        <header className={css.header}>
            <form onSubmit={handleSubmit} className= {css.searchForm}>
                <input
                name="query"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={query}
                onChange={handleChange}
                className={css.input}
                />
                <button type="submit" className={css.searchBtn}>
                <FaSearch size="22px"/>
                </button>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
                // className={css.}
            />
        </header>
      )
    };
    export default SearchBar;

   
    

import { useState } from 'react';

export const Searchbar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(query);
    setQuery('');
  };

  return (
    <header className="searchBar">
      <form className="searchForm" onSubmit={handleSubmit}>
        <button className="searchFormButton" type="submit">
          <span className="searchFormButtonLabel">Search</span>
        </button>
        <input
          className="SearchForm-input"
          name="searchImg"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

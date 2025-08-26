import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);
  const debounceInput = () => {};
  useEffect(() => {
    // when search query changes then add delay to update the debounced
    // query using setTimeout
    const clearId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(clearId);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      console.log(`Make API call with ${debouncedQuery}`);
    }
  }, [debouncedQuery]);
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

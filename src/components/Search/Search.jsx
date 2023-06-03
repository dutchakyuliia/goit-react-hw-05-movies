import { React, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Search = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (!query) {
      toast.error('Please enter something');
      return;
    }
    onSubmit(query);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" type="text" placeholder="Search movies" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

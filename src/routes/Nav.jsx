import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = ({ search, setSearch }) => {
  const [searchResult, setSearchResult] = useState([])

  return (
    <nav className="Nav">
      <form onSubmit={(e) => e.preventDefault()} className="searchForm">
        <label htmlFor="search">Search post</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/newpost">Post</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;


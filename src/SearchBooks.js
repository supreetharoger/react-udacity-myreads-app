import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
      	<div className="search-books-bar">
      		<Link to="/" className="close-search">My Reads</Link>
      		<div className="search-books-input-wrapper">
      			<input type="text" placeholder="Search by Title or Author"/>
      		</div>
      	</div>
      	<div className="search-book-results">
      		<ol className="books-grid"></ol>
      	</div>
      </div>
      )
  }
}

export default SearchBooks
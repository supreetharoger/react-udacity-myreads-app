import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import BookItem from './BookItem';

class SearchBooks extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	query: ''
  	}
  }

  updateQuery = (query) => {
    if(this.props.searchBooks) {
      this.props.searchBooks(query.trim())
    }
  }

  clearSearch = (query) => {
    this.updateQuery('')
  }

 checkBookExistsInShelf = (books, book) => {
   let e = books.filter((c) => {
     return c.id === book.id
   }).map(data => {
     return data.shelf
   })
   return e
  }

  render() {
    const { searchBooksList, updateBook, books } = this.props
	if(searchBooksList  && (searchBooksList.length === undefined)) {
      searchBooksList.length = 0
    }
    return (
      <div className="search-books">
      	<div className="search-books-bar">
      		<Link to="/" onClick={this.clearSearch} className="close-search">My Reads</Link>
      		<div className="search-books-input-wrapper">
      			<input type="text" 
       					placeholder="Search by Title or Author"
       					onChange={(event) => this.updateQuery(event.target.value)}
       			/>
      		</div>
      	</div>
      	<div className="search-book-results">
			<div className="bookshelf">
      				<h2 className="bookshelf-title">{name}</h2>
      				<div className="bookshelf-books">
      					<ol className="books-grid">
      					{searchBooksList && searchBooksList.length > 0 && searchBooksList.map((book) => (
                         	 <BookItem key={book.id} book={book} existsInShelf={this.checkBookExistsInShelf(books, book)} updateBook={updateBook} />
						))}

      					</ol>
      				</div>
      			</div>
      	</div>
      </div>
      )
  }
}

export default SearchBooks
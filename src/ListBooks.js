import React, { Component } from 'react';
import BookItem from './BookItem';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  render() {
    const { books, updateBook } = this.props
    return (
      <div className="list-books">
      	<div className="list-books-title">
      		<h1>My Reads</h1>
      	</div>
      	<div className="list-books-content">
      		<div>
      			<BookShelf books={books} updateBook={updateBook} shelfname="currentlyReading" name="Currently Reading" />
				<BookShelf books={books} updateBook={updateBook} shelfname="wantToRead" name="Want To Read" />
				<BookShelf books={books} updateBook={updateBook} shelfname="read" name="Read" />
      		</div>
      	</div>
		<div className="open-search">
			<Link to="/search">Add Book</Link>
		</div>
      </div>
      )
  }
}

export default ListBooks
import React, { Component } from 'react';
import BookItem from './BookItem';
import BookShelf from './BookShelf';

class ListBooks extends Component {
  render() {
    const { books } = this.props
    console.log("PP", books)
    return (
      <div className="list-books">
      	<div className="list-books-title">
      		<h1>My Reads</h1>
      	</div>
      	<div className="list-books-content">
      		<div>
      			<BookShelf books={books} shelfname="currentlyReading" name="Currently Reading" />
				<BookShelf books={books} shelfname="wantToRead" name="Want To Read" />
				<BookShelf books={books} shelfname="read" name="Read" />
      		</div>
      	</div>
      </div>
      )
  }
}

export default ListBooks
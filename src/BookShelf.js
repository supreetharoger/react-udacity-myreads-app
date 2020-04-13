import React, { Component } from 'react';
import BookItem from './BookItem';


class BookShelf extends Component {
  state = {
    value: ''
  }
  handleChange = (event, book, updateBook) => {
    updateBook(book, event)
  }
  render() {
    const { books, shelfname, name, updateBook } = this.props;
    return (
      	<div className="bookshelf">
      				<h2 className="bookshelf-title">{name}</h2>
      				<div className="bookshelf-books">
      					<ol className="books-grid">
      					{books.filter((book) => (book.shelf && book.shelf === shelfname)).map((book) => (
      						<BookItem key={book.id} book={book} updateBook={updateBook} />
                          	
						))}
      					</ol>
      				</div>
      			</div>
      )
  }
}

export default BookShelf;
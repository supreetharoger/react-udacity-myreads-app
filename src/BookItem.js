import React, { Component } from 'react';

class BookItem extends Component {
  constructor(props) {
    super(props)
  	this.state = {
    	value: props.book.shelf
  	}
  }

  handleChange = (event, book, updateBook) => {
    updateBook(book, event)
    this.setState(() => {
      value: event
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { book, updateBook, existsInShelf } = this.props
    return (
      	
      		<li key={book.id}>
      							<div className="book">
      								<div className="book-top">
      									<div className="book-cover" 
											style={{width: 128, 
                                                    height: 193,
                                                    backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
										<div className="book-shelf-changer">
										<form onSubmit={this.handleSubmit}>
											<select value={this.state.value} onChange={(event) => this.handleChange(event.target.value, book, updateBook)}>
												<option value="move" disabled>Move to</option>
												
{ (existsInShelf && existsInShelf[0] === 'currentlyReading') || book.shelf === 'currentlyReading' ?
		<option value='currentlyReading'>&#10003; currentlyReading</option> :
		<option value="currentlyReading">currentlyReading</option>
} 
{ (existsInShelf && existsInShelf[0] === 'wantToRead') || book.shelf === 'wantToRead' ?
		<option value='wantToRead'>&#10003; Want To Read</option> :
		<option value="wantToRead">Want To Read</option>
} 
{ (existsInShelf && existsInShelf[0] === 'read') || book.shelf === 'read' ?
		<option value='read'>&#10003; Read</option> :
		<option value="read">Read</option>
} 
{ (existsInShelf && existsInShelf[0] === 'none') || book.shelf === 'none' ?
		<option value='none'>&#10003; None</option> :
		<option value="none">None</option>
}
											</select>
										</form>
										</div>
      								</div>
									<div className="book-title">{book.title}</div>
									<div className="book-authors">{book.author}</div> 
      							</div>
							</li>
      	
      )
  }
}

export default BookItem
import React, { Component } from 'react';

class BookItem extends Component {
  state = {
    value: ''
  }

  handleChange = (event, book, updateBook) => {
    console.log("SUP", book)
    updateBook(book, event)
  }

  render() {
    const { book, updateBook } = this.props
    return (
      	
      		<li key={book.id}>
      							<div className="book">
      								<div className="book-top">
      									<div className="book-cover" 
											style={{width: 128, 
                                                    height: 193,
                                                    backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
										<div className="book-shelf-changer">
											<select value={this.state.value} onChange={(event) => this.handleChange(event.target.value, book, updateBook)}>
												<option value="move" disabled>Move to</option>
												<option value="currentlyReading">Currently Reading</option>
												<option value="wantToRead">Want To Read</option>
<option value="currentlyReading">Currently Reading</option>
												<option value="read">Read</option>
												<option value="none">None</option>
											</select>
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
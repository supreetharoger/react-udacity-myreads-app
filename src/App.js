import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import update from 'react-addons-update'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooksList: []
  }

  componentDidMount() {
    BooksAPI.getAll()
		.then((books) => {
          console.log(books)
          this.setState(()=> ({
            books: books
          }))
        })
  }



  searchBooks = (query) => {
    	console.log(encodeURIComponent(query))
    	BooksAPI.search(encodeURIComponent(query), 20)
    		.then((books) => {
          		this.setState(() => ({
                  searchBooksList: books
                }))            
        })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    	.then((result) => {
      		console.log("Result", result)      	
      		Object.keys(result).map((key) => {
              result[key].map((c) => {
                console.log(c)
              })
            })
      		
             book = update(book, { shelf : { $set: shelf}})    	
      		 let updateBookList = this.state.books.filter((c) => {
               		return c.id !== book.id })
             this.setState(prevState => ({ books: [...this.state.books.filter((c) => {
               		return c.id !== book.id }), book] }));
    })
  }

  render() {
    return (
      <div className="app">
       <Route exact path="/" render={() => (
    		<ListBooks books={this.state.books} 
					   updateBook={(book, shelf) => {
              			this.updateBook(book, shelf) }}/>
    	)}/>
    	<Route path="/search" render={() => (
          	<SearchBooks searchBooksList={this.state.searchBooksList} 
					     searchBooks={(query) => {
          						this.searchBooks(query)
        					}}
						updateBook={(book, shelf) => {
              			this.updateBook(book, shelf) }}
          />
          )}/>
        
      </div>
    )
  }
}

export default BooksApp

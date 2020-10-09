import React from 'react';
import Book from './Book';
// import data from './models/books.json';
// import logo from './logo.svg';
// import './App.css';

const BookList = (props) => {
  return (
    <div>
        {props.books.map(book => (
     <Book key={book.id} book={book} addBook={props.addBook}/>
        ))}
    </div>
  );
}


export default BookList;
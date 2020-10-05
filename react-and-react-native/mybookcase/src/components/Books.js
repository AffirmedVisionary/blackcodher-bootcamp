import React from 'react';
import ReactDOM from 'react-dom';
import books from '../models/books.json';
import './Book.css'

const Book = (book) => {
  let {volumeInfo: {title, authors, description, imageLinks: {thumbnail}}} = books;
    return (
      <div className='bookContainer'>
      <img src= {thumbnail} alt = {title}></img>
      <h2>{title}</h2>
      <p>{authors}</p>
      <p>{description}</p>
    </div>
    );
}

// const element = 
//   <Fragment>
//     {books.map (book => {
//       let {volumeInfo: {title, authors, description, imageLinks: {thumbnail}}} = book;
//     return (
//       <div className='bookContainer'>
//       <img src= {thumbnail} alt = {title}></img>
//       <p>{title}</p>
//       <p>{authors}</p>
//       <p>{description}</p>
//     </div>
//       )
// })};
//   </Fragment>;


ReactDOM.render(Book,document.getElementById('root'));


export default Book; 

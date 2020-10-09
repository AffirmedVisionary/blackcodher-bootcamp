import React from 'react';
import '../components/book.css'
import PropTypes from 'prop-types'
// import addBook from '../App'
// import Book from '../models/books.json'

const Book = (props) => {

    let {id, volumeInfo: {title, authors, description, imageLinks:{thumbnail, smallThumbnail}},
        saleInfo:{listPrice}} 
        = props.book;
   

        // let amount = () => {
        //     if (saleInfo.retailPrice) {
        //         let amount = saleInfo.retailPrice.amount;
        //         return amount
        //     }else {
        //         let amount = 'No Amount Set'; 
        //         return amount
        //     }
        // };
 
        // let url = () => {
        // if (imageLinks) {
        //     let url = imageLinks.smallThumbnail;
        //     return url;
        // } else {
        //     let url = 'image not available';
        //     return url;
        // }
        // };
        

    return (
        <div className='book'>
            <h2>{title}</h2>
            <h3>by {authors}</h3>
            <img src= {thumbnail || smallThumbnail} alt={title}/>
            <p>{listPrice && listPrice.amount}</p>
            <p>{description}</p>
            <button onClick={() => props.addBook(title, id)}>Add +</button>
        </div>
    );
}

Book.propTypes = {
    volumeInfo: PropTypes.shape(
        {title: PropTypes.string.isRequired,
        authors: PropTypes.array,
        description: PropTypes.string,
        imageLinks: PropTypes.shape(
            {thumbnail: PropTypes.string, 
            smallThumbnail: PropTypes.string})
        }),
        saleInfo: PropTypes.shape({listPrice: PropTypes.shape({amount: PropTypes.number})})
   };

   Book.defaultProps ={
       authors: "No Known Authors"
   }
   

export default Book;
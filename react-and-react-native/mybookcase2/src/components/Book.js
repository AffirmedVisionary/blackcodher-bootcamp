import React from 'react';
// import Book from '../models/books.json'

const Book = (props) => {

    let {id, 
        volumeInfo: {title, authors, description, imageLinks},
        saleInfo} 
        = props.book;
   
        let amount = () => {
            if (saleInfo.retailPrice) {
                let amount = saleInfo.retailPrice.amount;
                return amount
            }else {
                let amount = 'No Amount Set'; 
                return amount
            }
        };
 
        let url = () => {
        if (imageLinks) {
            let url = imageLinks.smallThumbnail;
            return url;
        } else {
            let url = 'image not available';
            return url;
        }
        };
        

    return (
        <div>
            <h2>{title}</h2>
            <h3>{authors}</h3>
            <img src= {url()} alt={id}/>
            <p>{amount()}</p>
            <p>{description}</p>
        </div>
    );
}

export default Book;
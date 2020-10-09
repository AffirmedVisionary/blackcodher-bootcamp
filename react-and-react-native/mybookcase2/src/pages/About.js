import React from 'react';
import { Link } from 'react-router-dom'
import '../pages/about.css'

function About() {
    return (
        <React.Fragment>
            <div className="aboutUs">
        <div className="hero-text">
          <h1>Welcome to the Bookcase</h1>
          <h3>This application was made by Charlene Grant</h3>
          <p>The app displays a list of books to the user and allows them to save their favourites to a local bookcase</p>
            <p>Click on the Add button to save a book to your bookcase. You can also search by name, author and description</p>
        <Link to="/" className="aboutButton">
            <button className="aboutButton">Look For A Book!</button>
        </Link>
      </div>
      </div>
        </React.Fragment>
    )
}

export default About
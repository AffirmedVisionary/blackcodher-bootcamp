import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product"

function App() {
  return (
    <div className="App">
      <Product 
        name = "Diary of the Wimpy Kid"
        author = "Unremembered author"
        description = "Children's book written in a comic style"
        price = "£4.99"
        src = "\media\bdcv-girls-poster.png"
        alt = "unrelated image"
      />
      <Product 
        name = "Winnie the pooh"
        author = "Unremembered author"
        description = "Children's book turned cartoon"
        price = "£3.99"
        src = "\media\affirmed3.png"
        alt = "Another unrelated image"
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

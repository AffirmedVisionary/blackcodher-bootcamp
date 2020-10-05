// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';
import Book from './components/Books';
import data from './models/books.json';


const App = (book) => {
  const [books] = useState(data);
  return (
    <div>
      {books.map(book => <Book key ={book.id} book={book}/>)}
    </div>
  )
}



export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


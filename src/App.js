import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksContainer from './pages/BooksContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<BooksContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

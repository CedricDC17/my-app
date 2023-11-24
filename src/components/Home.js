import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container homeBackground">
      <h1 className="heading">Welcome to the Home Page!</h1>
      <p className="text">This is a simple, cool little home page for our React App.</p>
      <Link to="/about" className="link">Go to About Page</Link>
    </div>
  );
}

export default Home;

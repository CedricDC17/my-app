import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container notFoundBackground">
      <h1 className="heading">404 Not Found</h1>
      <p className="text">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="link">Go Back Home</Link>
    </div>
  );
}

export default NotFound;

import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="link">Go Back Home</Link>
    </div>
  );
}

export default NotFound;

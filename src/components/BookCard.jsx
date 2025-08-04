import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div className="border p-4 rounded shadow">
    <h3 className="text-xl font-bold">{book.title}</h3>
    <p>Author: {book.author}</p>
    <p>Rating: {book.rating}</p>
    <Link to={`/book/${book.id}`} className="text-blue-600 underline">View Details</Link>
  </div>
);

export default BookCard;

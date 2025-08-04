import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold">
        <Link to="/">📚 Library</Link>
      </div>
      <ul className="flex space-x-6 text-lg font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Browse Books</Link></li>
        <li><Link to="/add">Add Book</Link></li>
      </ul>
     
    </nav>
  );
};

export default Navbar;

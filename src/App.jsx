import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import BrowseBooks from './pages/BrowseBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';
import AddBook from './pages/AddBook.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="flex justify-between items-center text-lg font-semibold">
          <div className="flex space-x-6">
            <NavLink to="/" className="hover:text-indigo-600">Home</NavLink>
            <NavLink to="/books/Fiction" className="hover:text-indigo-600">Browse Books</NavLink>
            <NavLink to="/add" className="hover:text-indigo-600">Add Book</NavLink>
          </div>
          <a
            href="https://github.com/AdityaPawar14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black px-4 py-2 rounded hover:text-indigo-600 text-lg"
          >
            GitHub
          </a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

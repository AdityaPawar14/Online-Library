import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [search, setSearch] = useState('');

  const filtered = books.filter(
    b => b.category === category && (
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">{category} Books</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        className="block w-full max-w-md mx-auto mb-6 p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(book => (
          <div key={book.id} className="bg-white rounded-xl shadow-md p-4">
            <h3 className="font-semibold text-lg">{book.title}</h3>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <Link to={`/book/${book.id}`} className="mt-2 inline-block text-blue-600 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="text-center py-12 px-4">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">Welcome to the Online Library 📚</h1>
      <p className="text-lg text-gray-700 mb-4">Explore books across categories</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mb-8">
        {['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'].map(cat => (
          <Link key={cat} to={`/books/${cat}`} className="bg-indigo-100 hover:bg-indigo-200 px-4 py-2 rounded-lg shadow-md">{cat}</Link>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-10">Popular Books</h2>
      <div className="mt-4 text-indigo-700 underline">
        <Link to="/books/Fiction">View More →</Link>
      </div>
    </section>
  );
}
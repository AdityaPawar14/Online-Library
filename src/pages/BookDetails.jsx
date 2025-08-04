import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state => state.books.find(b => b.id === id));

  if (!book) return <div className="text-center py-10 text-red-500">Book not found</div>;

  return (
    <section className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-purple-700">{book.title}</h2>
      <p className="text-gray-600 mb-2">by {book.author}</p>
      <p className="text-gray-700 mb-4">{book.description}</p>
      <p className="font-semibold">Rating: ⭐ {book.rating}</p>
      <button
        className="mt-6 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        onClick={() => navigate(-1)}
      >Back to Browse</button>
    </section>
  );
}
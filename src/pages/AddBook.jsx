import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/bookSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const [form, setForm] = useState({ title: '', author: '', category: '', description: '', rating: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
      alert('All fields are required');
      return;
    }
    dispatch(addBook(form));
    navigate(`/books/${form.category}`);
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-white mt-10 shadow-md rounded" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Book</h2>
      {['title', 'author', 'category', 'description', 'rating'].map(key => (
        <input
          key={key}
          className="mb-4 w-full p-2 border rounded"
          type="text"
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full">Add Book</button>
    </form>
  );
}
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold text-red-600">404 - Page Not Found</h2>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-block text-blue-500 underline">Go back to Home</Link>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 — Page not found</h1>
      <p className="mb-6">Sorry, we couldn't find that page.</p>
      <Link
        to="/"
        className="inline-block px-4 py-2 border-2 border-black bg-white hover:bg-gray-100"
      >
        Go home
      </Link>
    </div>
  );
}

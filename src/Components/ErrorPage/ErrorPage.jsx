import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Something went wrong
      </h2>

      <p className="text-gray-600 mb-6">
        {error?.statusText || error?.message || "Page not found"}
      </p>

      <Link
        to="/"
        className="px-6 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;

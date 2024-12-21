import React from "react";

const ForbiddenPage: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-9xl font-extrabold text-red-500">403</h1>
          <p className="text-2xl font-semibold text-gray-800 mt-4">
            Access Forbidden
          </p>
          <p className="text-gray-600 mt-2">
            You do not have permission to access this page. Please contact the
            administrator if you think this is a mistake.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-300"
            >
              Go Back to Home
            </a>
          </div>
          <div className="mt-8">
            <img
              src="https://via.placeholder.com/300x200?text=Access+Forbidden"
              alt="Access Forbidden"
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;

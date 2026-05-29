import React from "react";

const NotFoundPage: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-[10rem] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 select-none">
          404
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6" />

        {/* Title */}
       <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-lg mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleGoHome}
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Go to Homepage
          </button>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white text-gray-600 font-semibold rounded-xl border border-gray-200 hover:bg-gray-100 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
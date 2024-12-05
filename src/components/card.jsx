import { useState } from "react";

function Card({ img, name, onDelete }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative w-[320px] h-[400px] p-4 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 ease-in-out">

      <div className="relative w-full h-[240px] rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={img}
          alt={name}
        />
      <button
        onClick={() => setLiked(!liked)}
        className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
          liked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-500"
        } transition-all hover:scale-110`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={liked ? "white" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={liked ? "white" : "currentColor"}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
          />
        </svg>
      </button>
      </div>

      <h2 className="mt-4 text-xl font-semibold text-gray-800 text-center">
        {name}
      </h2>

      <button
        onClick={onDelete}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-10 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}

export default Card;

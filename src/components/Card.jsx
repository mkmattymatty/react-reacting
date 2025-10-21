// src/Card.jsx
import React from "react";

function Card({ title, body, className }) {
  return (
    <div
      className={`p-4 border rounded shadow hover:scale-105 transform transition duration-300 bg-white dark:bg-gray-800 text-black dark:text-white ${className}`}
    >
      {title && <h3 className="font-bold text-lg mb-2">{title}</h3>}
      {body && <p>{body}</p>}
    </div>
  );
}

export default Card;

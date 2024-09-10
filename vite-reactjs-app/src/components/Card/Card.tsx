import React from "react";

interface Product {
  image: string;
  title: string;
  description: string;
  category: string;
}

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  return (
    <div className="py-2 px-2 md:py-4 md:px-4">
      <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full bg-contain bg-center"
            src={product.image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3">
              {product.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
            {product.description}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
            <p className="mb-4">0% Complete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

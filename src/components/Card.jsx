import React from "react";
export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Learn REACT with VITE
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}

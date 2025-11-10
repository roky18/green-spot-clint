import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { TbError404 } from "react-icons/tb";
import { VscError } from "react-icons/vsc";

const Error = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-4xl flex"><RiErrorWarningFill /><VscError /><TbError404 /><VscError /><RiErrorWarningFill /></p>
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-blue-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300"
      >
        Go to Homepage
      </a>
    </div>
    </div>
  );
};

export default Error;

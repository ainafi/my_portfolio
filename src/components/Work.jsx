import React, { useState } from 'react';
import { Github } from '../assets/images';
const Work = ({name,image,tech,images}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-64 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out pt-4 sm:ms-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2">
          <div className="flex flex-col items-center space-x-2 mb-2">
            <img src={image} alt="Icon" className="w-full rounded-lg " />
            <h3 className="text-[20px] font-semibold  mb-2 mt-4 ">{name}</h3>
            <h3 className="text-[15px] font-light  mb-2  ">{tech}</h3>
          </div>
      </div>
     
      {isHovered && (
        <div className="flex justify-center items-center p-4 bg-gray-100 w-full h-full absolute top-0 left-0 opacity-70">
          <a href="lien-vers-github" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <img  src={Github} alt="github" className='w-7' />
          </a>
          <a href="lien-vers-autre-page" className="text-blue-600 hover:text-blue-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
       )} 
    </div>
  );
};

export default Work;

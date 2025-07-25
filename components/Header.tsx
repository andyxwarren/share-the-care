
import React from 'react';
import { BookIcon, GlobeIcon, TrophyIcon, ScreenIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="mb-8 md:mb-12">
      <div className="flex flex-col items-center justify-center space-y-4 mb-6">
        <div className="flex items-end justify-center space-x-2 md:space-x-4 text-slate-400">
           <TrophyIcon className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" />
           <div className="relative">
             <div className="absolute -top-4 -left-2 w-8 h-8">
                <svg viewBox="0 0 100 100" className="w-full h-full text-red-500 fill-current">
                  <circle cx="50" cy="50" r="20" />
                  <path d="M50 30 Q 60 0, 70 30" stroke="green" strokeWidth="5" fill="none" />
                </svg>
             </div>
             <BookIcon className="w-16 h-16 md:w-24 md:h-24 text-blue-400" />
           </div>
           <ScreenIcon className="w-20 h-20 md:w-28 md:h-28 text-slate-500" />
           <GlobeIcon className="w-10 h-10 md:w-16 md:h-16 text-green-400" />
        </div>
        <div className="w-full max-w-lg h-1.5 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 rounded-full" />
      </div>

      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
          Share the Care
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-slate-400">Summer 2025</p>
      </div>
    </header>
  );
};

export default Header;

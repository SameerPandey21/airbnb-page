import React from 'react';
import { Globe, Menu, Search } from 'lucide-react';

interface HeaderProps {
  onSearchClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EBEBEB] px-6 lg:px-10 py-3.5 transition-shadow duration-200">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex-shrink-0 flex items-center cursor-pointer">
          <a href="#" className="flex items-center gap-1.5 group text-[#FF385C]" aria-label="Airbnb Home">
            <svg
              className="w-[34px] h-[34px] fill-current transition-transform group-hover:scale-105"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
            </svg>
            <span className="font-bold text-[20px] tracking-tighter hidden sm:inline-block leading-none">airbnb</span>
          </a>
        </div>

        {/* Center Search Pill */}
        <div
          onClick={onSearchClick}
          className="hidden md:flex items-center border border-[#DDDDDD] rounded-full py-2 px-3 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow cursor-pointer select-none"
        >
          <div className="flex items-center pl-1 pr-1.5">
            <img
              src="/images/house_search_icon.png"
              alt="House"
              className="w-5 h-5 object-contain"
            />
          </div>
          <button className="text-sm font-semibold text-[#222222] px-3 hover:opacity-80 transition-opacity">
            Anywhere
          </button>
          <span className="h-4 w-[1px] bg-[#DDDDDD]" aria-hidden="true" />
          <button className="text-sm font-semibold text-[#222222] px-3 hover:opacity-80 transition-opacity">
            Anytime
          </button>
          <span className="h-4 w-[1px] bg-[#DDDDDD]" aria-hidden="true" />
          <button className="text-sm font-normal text-[#717171] px-3 hover:opacity-80 transition-opacity">
            Add guests
          </button>
          <div className="w-8 h-8 rounded-full bg-[#FF385C] flex items-center justify-center text-white ml-1">
            <Search className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>

        {/* User / Host Menu */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="font-semibold text-sm text-[#222222] hover:bg-[#F7F7F7] px-3.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap">
            Become a host
          </button>
          <button
            className="p-2.5 text-[#222222] hover:bg-[#F7F7F7] rounded-full transition-colors cursor-pointer"
            aria-label="Choose language and currency"
          >
            <Globe className="w-4 h-4 text-[#222222]" />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-[#F2F2F2] border border-[#DDDDDD] hover:bg-[#EBEBEB] hover:shadow-sm transition-all flex items-center justify-center text-[#222222] cursor-pointer"
            aria-label="Main navigation menu"
          >
            <Menu className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};


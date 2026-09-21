import React, { useState } from 'react';
import { Home, Plus, Minus, Search, ChevronRight } from 'lucide-react';

interface LocationSectionProps {
  location: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ location }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      <h3 className="text-[22px] leading-[26px] font-semibold text-[#222222] mb-1">
        Where you'll be
      </h3>
      <p className="text-base text-[#222222] mb-6">{location}</p>

      {/* Interactive Map Visual */}
      <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-[#DDDDDD] bg-[#E5ECEC] mb-6 shadow-sm">
        {/* Map Background Image */}
        <img
          src="/images/candolim_map.jpg"
          alt="Map of Candolim Goa"
          className="w-full h-full object-cover"
        />

        {/* Home location icon pin in the center of the green radius */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center">
            <div className="w-12 h-12 bg-[#222222] rounded-full shadow-lg flex items-center justify-center text-white border-2 border-white">
              <Home className="w-6 h-6 fill-white stroke-none" />
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col bg-white rounded-lg shadow-md border border-[#DDDDDD] overflow-hidden">
          <button
            className="p-2 hover:bg-[#F7F7F7] border-b border-[#DDDDDD] transition-colors focus:outline-none"
            aria-label="Zoom in"
          >
            <Plus className="w-4 h-4 text-[#222222]" />
          </button>
          <button
            className="p-2 hover:bg-[#F7F7F7] transition-colors focus:outline-none"
            aria-label="Zoom out"
          >
            <Minus className="w-4 h-4 text-[#222222]" />
          </button>
        </div>

        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md border border-[#DDDDDD] p-2">
          <Search className="w-4 h-4 text-[#222222]" />
        </div>
      </div>

      <div className="text-sm text-[#717171] mb-6">
        Exact location will be provided after booking.
      </div>

      {/* Neighborhood Highlights */}
      <div>
        <h4 className="font-semibold text-base text-[#222222] mb-2">Neighbourhood highlights</h4>
        <p className="text-sm text-[#222222] leading-relaxed">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
          {isExpanded && (
            <span className="block mt-2 text-[#222222]">
              Candolim Beach is just a short 5-minute stroll away. Enjoy water sports, beachfront shacks, vibrant night markets, and authentic Goan seafood within walking distance.
            </span>
          )}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 inline-flex items-center gap-1 font-semibold text-sm text-[#222222] underline underline-offset-4 hover:text-black cursor-pointer"
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? '-rotate-90' : ''}`} />
        </button>
      </div>
    </div>
  );
};

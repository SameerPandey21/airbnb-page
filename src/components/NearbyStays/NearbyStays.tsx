import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { NearbyStay } from '../../types/property';
import { getOptimizedImageUrl } from '../../utils/image';

interface NearbyStaysProps {
  stays: NearbyStay[];
}

export const NearbyStays: React.FC<NearbyStaysProps> = ({ stays }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // If stays has 8 items: page 1 shows 0-5 (5 items), page 2 shows 3-8 (5 items)
  const activeStays = currentPage === 1 ? stays.slice(0, 5) : stays.slice(3, 8);

  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      {/* Header with 1/2 pagination control */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[22px] leading-[26px] font-semibold text-[#222222]">
          More stays nearby
        </h3>

        <div className="flex items-center gap-3">
          <span className="text-sm text-[#717171]">{currentPage} / 2</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="p-1.5 rounded-full border border-[#DDDDDD] hover:border-[#222222] disabled:opacity-30 disabled:hover:border-[#DDDDDD] transition-colors cursor-pointer"
              aria-label="Previous page of nearby stays"
            >
              <ChevronLeft className="w-4 h-4 text-[#222222]" />
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              disabled={currentPage === 2}
              className="p-1.5 rounded-full border border-[#DDDDDD] hover:border-[#222222] disabled:opacity-30 disabled:hover:border-[#DDDDDD] transition-colors cursor-pointer"
              aria-label="Next page of nearby stays"
            >
              <ChevronRight className="w-4 h-4 text-[#222222]" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards Grid: 5 columns matching screenshot with no top-right hearts and no hover zoom */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {activeStays.slice(0, 5).map((stay) => (
          <div key={stay.id} className="cursor-pointer">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2.5 bg-[#F7F7F7]">
              <img
                src={getOptimizedImageUrl(stay.image, 720)}
                alt={stay.title}
                onError={(e) => {
                  if (stay.localFallback) e.currentTarget.src = stay.localFallback;
                }}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-xs font-semibold text-[#222222] truncate leading-tight">
              {stay.title}
            </div>

            <div className="flex items-center justify-between text-xs text-[#717171] mt-1">
              <span className="truncate">{stay.location}</span>
              <div className="flex items-center gap-0.5 font-medium text-[#222222]">
                <Star className="w-3 h-3 fill-black text-black" />
                <span>{stay.rating.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-1 text-xs font-semibold text-[#222222]">
              {stay.pricePerNight} <span className="font-normal text-[#717171]">night</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ChevronDown, Flag } from 'lucide-react';

interface BookingCardProps {
  onReserveClick?: () => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({ onReserveClick }) => {
  const [claimed, setClaimed] = useState(false);

  return (
    <div className="sticky top-28 w-full max-w-[370px] ml-auto">
      {/* Top 10% Off Promo Banner matching reference screenshot */}
      <div className="mb-4 bg-white border border-[#DDDDDD] rounded-2xl p-4 shadow-xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Green discount tag icon */}
          <div className="flex-shrink-0">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M12.5 3.5H7a2 2 0 0 0-2 2v5.5a2 2 0 0 0 .58 1.42l8.5 8.5a2 2 0 0 0 2.84 0l4.58-4.58a2 2 0 0 0 0-2.84l-8.5-8.5A2 2 0 0 0 11.5 3.5z"
                fill="#2E8540"
              />
              <circle cx="8.5" cy="8.5" r="1.5" fill="white" />
              <path d="M7.5 7.5L5 5" stroke="#8C6E52" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="text-xs leading-tight">
            <div className="font-medium text-[#222222]">Get 10% off your next stay.</div>
            <button className="text-xs text-[#222222] underline font-normal hover:text-black mt-0.5 cursor-pointer">
              Terms apply
            </button>
          </div>
        </div>

        <button
          onClick={() => setClaimed(!claimed)}
          className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer border ${
            claimed
              ? 'bg-[#E8F5E9] text-[#2E8540] border-[#A5D6A7]'
              : 'bg-[#F7F7F7] hover:bg-[#EBEBEB] text-[#222222] border-[#E0E0E0]'
          }`}
        >
          {claimed ? 'Claimed' : 'Claim'}
        </button>
      </div>

      {/* Main Reservation Card */}
      <div className="bg-white border border-[#DDDDDD] rounded-2xl p-6 shadow-xl relative">
        {/* Price display with bold underlined price matching screenshot */}
        <div className="flex items-baseline gap-1.5 mb-6">
          <span className="text-[22px] font-bold text-[#222222] underline underline-offset-4 decoration-2">
            ₹28,499
          </span>
          <span className="text-base text-[#222222] font-normal">
            for 5 nights
          </span>
        </div>

        {/* Date & Guest Input Box matching reference screenshot */}
        <div className="border border-[#B0B0B0] rounded-xl overflow-hidden mb-4 relative">
          {/* Top Date row */}
          <div className="grid grid-cols-2 divide-x divide-[#B0B0B0] border-b border-[#B0B0B0]">
            <div className="p-3 text-left">
              <div className="text-[10px] font-bold tracking-wider uppercase text-[#222222]">
                CHECK-IN
              </div>
              <div className="text-sm font-normal text-[#222222] truncate mt-0.5">
                10/18/2026
              </div>
            </div>

            <div className="p-3 text-left">
              <div className="text-[10px] font-bold tracking-wider uppercase text-[#222222]">
                CHECKOUT
              </div>
              <div className="text-sm font-normal text-[#222222] truncate mt-0.5">
                10/23/2026
              </div>
            </div>
          </div>

          {/* Bottom Guest row */}
          <div className="w-full p-3 text-left flex items-center justify-between cursor-pointer hover:bg-[#F7F7F7] transition-colors">
            <div>
              <div className="text-[10px] font-bold tracking-wider uppercase text-[#222222]">
                GUESTS
              </div>
              <div className="text-sm font-normal text-[#222222] truncate mt-0.5">
                2 guests
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-[#222222]" />
          </div>
        </div>

        {/* Free cancellation pill matching reference screenshot */}
        <div className="bg-[#F7F7F7] text-xs text-[#222222] py-2.5 px-4 rounded-xl text-center font-normal mb-4">
          Free cancellation before <span className="font-bold">17 October</span>
        </div>

        {/* Reserve CTA Button matching hot-pink Airbnb color */}
        <button
          onClick={onReserveClick}
          className="w-full py-3.5 px-6 rounded-xl text-white font-semibold text-base bg-[#E00B41] hover:bg-[#D70466] active:scale-[0.99] transition-all cursor-pointer shadow-sm focus:outline-none"
        >
          Reserve
        </button>

        {/* Charged disclaimer */}
        <div className="text-xs text-[#717171] text-center mt-3">
          You won't be charged yet
        </div>
      </div>

      {/* Report Listing link */}
      <div className="flex items-center justify-center gap-2 mt-6 text-[#717171] hover:text-[#222222] cursor-pointer text-xs">
        <Flag className="w-3.5 h-3.5 fill-[#717171]" />
        <span className="font-semibold underline">Report this listing</span>
      </div>
    </div>
  );
};

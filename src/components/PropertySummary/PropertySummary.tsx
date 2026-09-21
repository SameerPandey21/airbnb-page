import React from 'react';
import { Star } from 'lucide-react';
import { Property } from '../../types/property';

interface PropertySummaryProps {
  property: Property;
}

export const PropertySummary: React.FC<PropertySummaryProps> = ({ property }) => {
  return (
    <div className="pb-6 border-b border-[#EBEBEB]">
      {/* Title / Spec Subtitle */}
      <h2 className="text-[22px] leading-[26px] font-semibold text-[#222222]">
        {property.tagline}
      </h2>
      <ol className="flex items-center gap-1 text-sm text-[#222222] mt-1 list-none p-0">
        <li>{property.guestCount} guests</li>
        <li aria-hidden="true">·</li>
        <li>{property.bedroomCount} bedroom</li>
        <li aria-hidden="true">·</li>
        <li>{property.bedCount} bed</li>
        <li aria-hidden="true">·</li>
        <li>{property.bathroomCount} bathroom</li>
      </ol>

      {/* Guest Favourite Rating Box matching reference screenshot */}
      {property.isGuestFavorite && (
        <div className="mt-6 border border-[#DDDDDD] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Laurel branches enclosing stacked Guest favourite */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <img
                src="/images/laurel_small_left.png"
                alt=""
                className="h-9 w-auto object-contain select-none"
              />
              <div className="font-extrabold text-[15px] leading-[18px] text-[#222222] tracking-tight text-center">
                <div>Guest</div>
                <div>favourite</div>
              </div>
              <img
                src="/images/laurel_small_right.png"
                alt=""
                className="h-9 w-auto object-contain select-none"
              />
            </div>

            {/* Subtitle */}
            <div className="text-sm text-[#222222] leading-snug font-medium max-w-[240px]">
              One of the most loved homes on Airbnb, according to guests
            </div>
          </div>

          <div className="flex items-center gap-5 self-end sm:self-auto">
            <div className="text-center">
              <div className="text-xl font-bold text-[#222222] leading-none mb-1">
                {property.rating.toFixed(2)}
              </div>
              <div className="flex items-center gap-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-[#222222] text-[#222222]" />
                ))}
              </div>
            </div>

            <div className="h-9 w-px bg-[#DDDDDD]" aria-hidden="true" />

            <div className="text-center cursor-pointer hover:underline">
              <div className="text-xl font-bold text-[#222222] leading-none mb-1">
                {property.reviewCount}
              </div>
              <div className="text-xs text-[#222222] font-semibold underline">
                Reviews
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import {
  UtensilsCrossed,
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  PawPrint,
  ShieldAlert,
  AlertCircle,
  BellRing,
  X,
  Wind,
  Sparkles,
  Flame,
  Droplets,
  Disc,
  Check,
  SunDim,
  Baby,
  Tv,
  Snowflake,
  Fan,
  Utensils,
  Coffee,
  GlassWater,
  Zap,
  Dumbbell,
  Calendar,
  KeyRound,
  DoorOpen,
} from 'lucide-react';
import { Amenity } from '../../types/property';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface AmenitiesProps {
  amenities: Amenity[];
}

export const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  useLockBodyScroll(isOpenModal);
  const modalRef = useFocusTrap(isOpenModal);

  const getIcon = (iconName: string, className = 'w-6 h-6 stroke-[1.6]') => {
    switch (iconName) {
      case 'UtensilsCrossed': return <UtensilsCrossed className={className} />;
      case 'Wifi': return <Wifi className={className} />;
      case 'Laptop': return <Laptop className={className} />;
      case 'Car': return <Car className={className} />;
      case 'Waves': return <Waves className={className} />;
      case 'Bath': return <Bath className={className} />;
      case 'PawPrint': return <PawPrint className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'AlertCircle': return <AlertCircle className={className} />;
      case 'BellRing': return <BellRing className={className} />;
      case 'Wind': return <Wind className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Droplets': return <Droplets className={className} />;
      case 'Disc': return <Disc className={className} />;
      case 'Check': return <Check className={className} />;
      case 'SunDim': return <SunDim className={className} />;
      case 'Baby': return <Baby className={className} />;
      case 'Tv': return <Tv className={className} />;
      case 'Snowflake': return <Snowflake className={className} />;
      case 'Fan': return <Fan className={className} />;
      case 'Utensils': return <Utensils className={className} />;
      case 'Coffee': return <Coffee className={className} />;
      case 'GlassWater': return <GlassWater className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Dumbbell': return <Dumbbell className={className} />;
      case 'Calendar': return <Calendar className={className} />;
      case 'KeyRound': return <KeyRound className={className} />;
      case 'DoorOpen': return <DoorOpen className={className} />;
      default: return <Check className={className} />;
    }
  };

  // 10 highlighted amenities shown on main page
  const highlightedAmenities = amenities.filter((a) => a.isHighlighted).slice(0, 10);

  // Group all amenities by category for modal
  const categories = Array.from(new Set(amenities.map((a) => a.category)));

  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      <h3 className="text-[22px] leading-[26px] font-semibold text-[#222222] mb-6">
        What this place offers
      </h3>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
        {highlightedAmenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-4 text-[#222222]">
            <div className="flex-shrink-0 text-[#222222]">{getIcon(amenity.iconName)}</div>
            <span className="text-base text-[#222222]">{amenity.name}</span>
          </div>
        ))}
      </div>

      {/* Modal Trigger Button */}
      <button
        onClick={() => setIsOpenModal(true)}
        className="border border-[#222222] rounded-lg px-6 py-3 font-semibold text-base text-[#222222] hover:bg-[#F7F7F7] active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#222222]"
      >
        Show all {amenities.length || 48} amenities
      </button>

      {/* Full Amenities Modal */}
      {isOpenModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="amenities-modal-title"
          onClick={() => setIsOpenModal(false)}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl animate-slide-up relative"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-[#EBEBEB] flex items-center justify-between sticky top-0 bg-white rounded-t-2xl z-10">
              <button
                onClick={() => setIsOpenModal(false)}
                className="p-2 -ml-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222]"
                aria-label="Close amenities dialog"
              >
                <X className="w-5 h-5 stroke-[2]" />
              </button>
              <h4 id="amenities-modal-title" className="font-semibold text-base text-[#222222]">
                What this place offers
              </h4>
              <div className="w-8" aria-hidden="true" />
            </div>

            {/* Modal Body with grouped categories */}
            <div className="p-6 overflow-y-auto custom-scrollbar divide-y divide-[#EBEBEB] space-y-8">
              {categories.map((category) => (
                <div key={category} className="pt-6 first:pt-0">
                  <h5 className="font-semibold text-lg text-[#222222] mb-4">{category}</h5>
                  <div className="space-y-4">
                    {amenities
                      .filter((a) => a.category === category)
                      .map((amenity) => (
                        <div key={amenity.id} className="flex items-center gap-4 py-1 text-[#222222]">
                          <div className="flex-shrink-0 text-[#222222]">
                            {getIcon(amenity.iconName, 'w-5 h-5 stroke-[1.6]')}
                          </div>
                          <span className="text-base">{amenity.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

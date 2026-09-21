import React from 'react';
import { Bed, Armchair } from 'lucide-react';
import { Room } from '../../types/property';
import { getOptimizedImageUrl } from '../../utils/image';

interface SleepingArrangementsProps {
  rooms: Room[];
  onOpenPhotoTour?: (index?: number) => void;
}

export const SleepingArrangements: React.FC<SleepingArrangementsProps> = ({ rooms = [], onOpenPhotoTour }) => {
  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      <h3 className="text-[22px] leading-[26px] font-semibold text-[#222222] mb-6">
        Where you'll sleep
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rooms.map((room) => {
          // Bedroom starts at index 12 in the 43-photo gallery (Living room 1: 0-2, Living room 2: 3-9, Kitchen: 10-11, Bedroom: 12-17)
          const targetIndex = room.name.toLowerCase().includes('bedroom') ? 12 : 0;
          return (
            <div
              key={room.id}
              onClick={() => onOpenPhotoTour?.(targetIndex)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenPhotoTour?.(targetIndex)}
              className="border border-[#DDDDDD] rounded-xl p-5 hover:border-[#222222] transition-colors cursor-pointer group text-left"
              aria-label={`View sleeping arrangement: ${room.name}, ${room.beds}`}
            >
            {room.image && (
              <div className="h-32 mb-4 rounded-lg overflow-hidden">
                <img
                  src={getOptimizedImageUrl(room.image, 720)}
                  alt={room.name}
                  onError={(e) => {
                    if (room.name.toLowerCase().includes('bedroom')) {
                      e.currentTarget.src = '/images/gallery/bedroom_1.jpg';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="flex items-center gap-2 mb-2 text-[#222222]">
              {room.name.toLowerCase().includes('bedroom') ? (
                <Bed className="w-5 h-5 stroke-[1.6]" />
              ) : (
                <Armchair className="w-5 h-5 stroke-[1.6]" />
              )}
              <h4 className="font-semibold text-base text-[#222222]">{room.name}</h4>
            </div>
            <p className="text-sm text-[#717171]">{room.beds}</p>
          </div>
          );
        })}
      </div>
    </div>
  );
};

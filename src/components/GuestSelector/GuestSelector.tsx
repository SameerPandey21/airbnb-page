import React, { useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { GuestCounts } from '../../types/property';

interface GuestSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  guestCounts: GuestCounts;
  onChange: (counts: GuestCounts) => void;
  maxGuests?: number;
}

export const GuestSelector: React.FC<GuestSelectorProps> = ({
  isOpen,
  onClose,
  guestCounts,
  onChange,
  maxGuests = 3,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalAdultsAndChildren = guestCounts.adults + guestCounts.children;
  const canAddGuest = totalAdultsAndChildren < maxGuests;

  const handleUpdate = (type: keyof GuestCounts, delta: number) => {
    const next = { ...guestCounts };

    if (type === 'adults') {
      const val = next.adults + delta;
      if (val >= 1 && (delta < 0 || canAddGuest)) {
        next.adults = val;
      }
    } else if (type === 'children') {
      const val = next.children + delta;
      if (val >= 0 && (delta < 0 || canAddGuest)) {
        next.children = val;
      }
    } else if (type === 'infants') {
      const val = next.infants + delta;
      if (val >= 0 && val <= 5) {
        next.infants = val;
      }
    } else if (type === 'pets') {
      const val = next.pets + delta;
      if (val >= 0 && val <= 2) {
        next.pets = val;
      }
    }

    onChange(next);
  };

  return (
    <div
      ref={containerRef}
      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#EBEBEB] p-5 z-40 animate-slide-up"
      role="dialog"
      aria-label="Guest selector"
    >
      <div className="space-y-6">
        {/* Adults */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-base text-[#222222]">Adults</div>
            <div className="text-sm text-[#717171]">Age 13+</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleUpdate('adults', -1)}
              disabled={guestCounts.adults <= 1}
              className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:hover:border-[#DDDDDD] disabled:hover:text-[#717171] transition-colors"
              aria-label="Decrease adults"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center font-medium text-base text-[#222222]">
              {guestCounts.adults}
            </span>
            <button
              onClick={() => handleUpdate('adults', 1)}
              disabled={!canAddGuest}
              className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:hover:border-[#DDDDDD] disabled:hover:text-[#717171] transition-colors"
              aria-label="Increase adults"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-base text-[#222222]">Children</div>
            <div className="text-sm text-[#717171]">Ages 2–12</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleUpdate('children', -1)}
              disabled={guestCounts.children <= 0}
              className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:hover:border-[#DDDDDD] disabled:hover:text-[#717171] transition-colors"
              aria-label="Decrease children"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center font-medium text-base text-[#222222]">
              {guestCounts.children}
            </span>
            <button
              onClick={() => handleUpdate('children', 1)}
              disabled={!canAddGuest}
              className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:hover:border-[#DDDDDD] disabled:hover:text-[#717171] transition-colors"
              aria-label="Increase children"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Infants */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-base text-[#222222]">Infants</div>
            <div className="text-sm text-[#717171]">Under 2</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleUpdate('infants', -1)}
              disabled={guestCounts.infants <= 0}
              className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:hover:border-[#DDDDDD] disabled:hover:text-[#717171] transition-colors"
              aria-label="Decrease infants"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center font-medium text-base text-[#222222]">
              {guestCounts.infants}
            </span>
            <button
              onClick={() => handleUpdate('infants', 1)}
              disabled={guestCounts.infants >= 5}
              className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:hover:border-[#DDDDDD] disabled:hover:text-[#717171] transition-colors"
              aria-label="Increase infants"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pets */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-base text-[#222222]">Pets</div>
            <div className="text-sm text-[#717171]">Bringing a service animal?</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleUpdate('pets', -1)}
              disabled={guestCounts.pets <= 0}
              className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:hover:border-[#DDDDDD] disabled:hover:text-[#717171] transition-colors"
              aria-label="Decrease pets"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center font-medium text-base text-[#222222]">
              {guestCounts.pets}
            </span>
            <button
              onClick={() => handleUpdate('pets', 1)}
              disabled={guestCounts.pets >= 2}
              className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:hover:border-[#DDDDDD] disabled:hover:text-[#717171] transition-colors"
              aria-label="Increase pets"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-[#EBEBEB] flex justify-between items-center text-xs text-[#717171]">
        <span>This place has a maximum of {maxGuests} guests.</span>
        <button
          onClick={onClose}
          className="text-sm font-semibold text-[#222222] underline hover:text-black"
        >
          Close
        </button>
      </div>
    </div>
  );
};

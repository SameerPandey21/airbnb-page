import React from 'react';
import { Share, Heart } from 'lucide-react';

interface PropertyHeaderProps {
  title: string;
  isSaved: boolean;
  onToggleSave: () => void;
  onShare: () => void;
}

export const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  title,
  isSaved,
  onToggleSave,
  onShare,
}) => {
  return (
    <div className="pt-6 pb-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <h1 className="text-[26px] leading-[30px] font-semibold text-[#222222]">
          {title}
        </h1>

        <div className="flex items-center gap-4 self-end md:self-auto">
          {/* Share button without border or background box */}
          <button
            onClick={onShare}
            className="flex items-center gap-2 text-sm font-medium text-[#222222] hover:text-black transition-colors cursor-pointer border-0 outline-none focus:outline-none bg-transparent p-0"
            aria-label="Share options"
          >
            <Share className="w-4 h-4 stroke-[1.8]" />
            <span className="underline underline-offset-2">Share</span>
          </button>

          {/* Save button without border or background box */}
          <button
            onClick={onToggleSave}
            className="flex items-center gap-2 text-sm font-medium text-[#222222] hover:text-black transition-colors cursor-pointer border-0 outline-none focus:outline-none bg-transparent p-0"
            aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart
              className={`w-4 h-4 transition-transform duration-200 active:scale-125 ${
                isSaved ? 'fill-[#FF385C] text-[#FF385C]' : 'stroke-[1.8] text-[#222222]'
              }`}
            />
            <span className="underline underline-offset-2">{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

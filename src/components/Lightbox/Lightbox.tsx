import React from 'react';
import { ChevronLeft, ChevronRight, X, LayoutGrid } from 'lucide-react';
import { GalleryImage } from '../../types/property';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { getOptimizedImageUrl } from '../../utils/image';

interface LightboxProps {
  isOpen: boolean;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  onViewAllPhotos: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
  onViewAllPhotos,
}) => {
  useLockBodyScroll(isOpen);
  const containerRef = useFocusTrap<HTMLDivElement>(isOpen);

  const totalImages = images.length;
  const currentImage = images[currentIndex] || images[0];

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % totalImages);
  };

  useKeyboardNavigation({
    onArrowLeft: handlePrev,
    onArrowRight: handleNext,
    onEscape: onClose,
    isEnabled: isOpen,
  });

  if (!isOpen || !currentImage) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-white flex flex-col animate-fade-in select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
    >
      {/* Top Controls Bar */}
      <div className="h-16 px-6 lg:px-10 flex items-center justify-between border-b border-[#EBEBEB] bg-white z-20">
        {/* Left: View all grid icon */}
        <button
          onClick={onViewAllPhotos}
          className="p-2 -ml-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222]"
          aria-label="View all photos list"
          title="Back to photo tour"
        >
          <LayoutGrid className="w-5 h-5 stroke-[1.8]" />
        </button>

        {/* Center: Current Section Name */}
        <div className="text-sm font-semibold text-[#222222]">
          {currentImage.section}
        </div>

        {/* Right: Counter and Close */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#717171] font-medium">
            {currentIndex + 1} of {totalImages}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222]"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center p-4 md:p-8 bg-white overflow-hidden">
        {/* Previous Navigation Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full bg-white border border-[#DDDDDD] hover:border-[#222222] hover:scale-105 active:scale-95 shadow-md flex items-center justify-center text-[#222222] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#222222]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2]" />
        </button>

        {/* Center Active Image */}
        <div className="max-w-[1200px] max-h-[calc(100vh-140px)] w-full h-full flex items-center justify-center">
          <img
            key={currentImage.id}
            src={getOptimizedImageUrl(currentImage.src, 1440)}
            alt={currentImage.alt}
            onError={(e) => {
              if (currentImage.localFallback) e.currentTarget.src = currentImage.localFallback;
            }}
            className="max-h-full max-w-full object-contain rounded-md shadow-sm transition-opacity duration-200"
          />
        </div>

        {/* Next Navigation Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full bg-white border border-[#DDDDDD] hover:border-[#222222] hover:scale-105 active:scale-95 shadow-md flex items-center justify-center text-[#222222] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#222222]"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 stroke-[2]" />
        </button>
      </div>

      {/* Bottom Caption bar if available */}
      {currentImage.caption && (
        <div className="py-2.5 px-6 text-center text-xs text-[#717171] bg-white border-t border-[#EBEBEB]">
          {currentImage.caption}
        </div>
      )}
    </div>
  );
};

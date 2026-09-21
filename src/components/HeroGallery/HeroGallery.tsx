import React from 'react';
import { GalleryImage } from '../../types/property';
import { getOptimizedImageUrl } from '../../utils/image';

interface HeroGalleryProps {
  images: GalleryImage[];
  onOpenPhotoTour: (initialIndex?: number) => void;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({ images, onOpenPhotoTour }) => {
  // Extract the 5 hero images explicitly by isHero flag and position, falling back to first 5
  const heroCandidates = images.filter((img) => img.isHero);
  const heroImages =
    heroCandidates.length >= 5
      ? [...heroCandidates].sort((a, b) => (a.heroPosition ?? 0) - (b.heroPosition ?? 0)).slice(0, 5)
      : images.slice(0, 5);

  return (
    <div className="relative mb-6">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[380px] md:h-[450px] rounded-xl overflow-hidden">
        {/* Main Large Image (Left, spans 2 cols, 2 rows) */}
        {heroImages[0] && (
          <div
            onClick={() => onOpenPhotoTour(heroImages[0].galleryIndex ?? 0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenPhotoTour(heroImages[0].galleryIndex ?? 0)}
            className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#222222]"
            aria-label={`View photo 1: ${heroImages[0].alt}`}
          >
            <img
              src={getOptimizedImageUrl(heroImages[0].src, 1440)}
              alt={heroImages[0].alt}
              onError={(e) => {
                if (heroImages[0].localFallback) e.currentTarget.src = heroImages[0].localFallback;
              }}
              className="w-full h-full object-cover object-center group-hover:brightness-95 transition duration-200"
              loading="eager"
            />
          </div>
        )}

        {/* Top-Mid Image */}
        {heroImages[1] && (
          <div
            onClick={() => onOpenPhotoTour(heroImages[1].galleryIndex ?? 1)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenPhotoTour(heroImages[1].galleryIndex ?? 1)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#222222]"
            aria-label={`View photo 2: ${heroImages[1].alt}`}
          >
            <img
              src={getOptimizedImageUrl(heroImages[1].src, 720)}
              alt={heroImages[1].alt}
              onError={(e) => {
                if (heroImages[1].localFallback) e.currentTarget.src = heroImages[1].localFallback;
              }}
              className="w-full h-full object-cover object-center group-hover:brightness-95 transition duration-200"
              loading="eager"
            />
          </div>
        )}

        {/* Top-Right Image */}
        {heroImages[2] && (
          <div
            onClick={() => onOpenPhotoTour(heroImages[2].galleryIndex ?? 2)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenPhotoTour(heroImages[2].galleryIndex ?? 2)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#222222]"
            aria-label={`View photo 3: ${heroImages[2].alt}`}
          >
            <img
              src={getOptimizedImageUrl(heroImages[2].src, 720)}
              alt={heroImages[2].alt}
              onError={(e) => {
                if (heroImages[2].localFallback) e.currentTarget.src = heroImages[2].localFallback;
              }}
              className="w-full h-full object-cover object-center group-hover:brightness-95 transition duration-200"
              loading="eager"
            />
          </div>
        )}

        {/* Bottom-Mid Image */}
        {heroImages[3] && (
          <div
            onClick={() => onOpenPhotoTour(heroImages[3].galleryIndex ?? 3)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenPhotoTour(heroImages[3].galleryIndex ?? 3)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#222222]"
            aria-label={`View photo 4: ${heroImages[3].alt}`}
          >
            <img
              src={getOptimizedImageUrl(heroImages[3].src, 720)}
              alt={heroImages[3].alt}
              onError={(e) => {
                if (heroImages[3].localFallback) e.currentTarget.src = heroImages[3].localFallback;
              }}
              className="w-full h-full object-cover object-center group-hover:brightness-95 transition duration-200"
              loading="eager"
            />
          </div>
        )}

        {/* Bottom-Right Image */}
        {heroImages[4] && (
          <div
            onClick={() => onOpenPhotoTour(heroImages[4].galleryIndex ?? 4)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenPhotoTour(heroImages[4].galleryIndex ?? 4)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#222222]"
            aria-label={`View photo 5: ${heroImages[4].alt}`}
          >
            <img
              src={getOptimizedImageUrl(heroImages[4].src, 720)}
              alt={heroImages[4].alt}
              onError={(e) => {
                if (heroImages[4].localFallback) e.currentTarget.src = heroImages[4].localFallback;
              }}
              className="w-full h-full object-cover object-center group-hover:brightness-95 transition duration-200"
              loading="eager"
            />
          </div>
        )}
      </div>

      {/* "Show all photos" Button */}
      <button
        onClick={() => onOpenPhotoTour(0)}
        className="absolute bottom-5 right-5 bg-white hover:bg-[#F7F7F7] active:scale-95 text-[#222222] border border-[#222222] rounded-lg px-3.5 py-1.5 text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#222222]"
        aria-label="Show all photos"
      >
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-3.5 h-3.5 fill-current"
        >
          <path d="m3 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
        </svg>
        <span>Show all photos</span>
      </button>
    </div>
  );
};

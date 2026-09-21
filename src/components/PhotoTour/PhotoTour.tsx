import React, { useRef } from 'react';
import { ChevronLeft, Share, Heart } from 'lucide-react';
import { GalleryImage } from '../../types/property';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { getOptimizedImageUrl } from '../../utils/image';

interface PhotoTourProps {
  isOpen: boolean;
  images: GalleryImage[];
  isSaved?: boolean;
  onClose: () => void;
  onImageClick: (index: number) => void;
  onShare?: () => void;
  onToggleSave?: () => void;
}

export const PhotoTour: React.FC<PhotoTourProps> = ({
  isOpen,
  images,
  isSaved = false,
  onClose,
  onImageClick,
  onShare,
  onToggleSave,
}) => {
  useLockBodyScroll(isOpen);
  const containerRef = useFocusTrap<HTMLDivElement>(isOpen);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  if (!isOpen) return null;

  // Sections defined in reference video:
  const sections = [
    {
      name: 'Living room 1',
      specs: 'Sofa · Air conditioning · Ceiling fan · TV',
      thumbnail: images.find((img) => img.section === 'Living room 1')?.src || '/images/living_room_1_pos1.jpg',
      images: images.filter((img) => img.section === 'Living room 1'),
    },
    {
      name: 'Living room 2',
      specs: 'Ceiling fan · Hot tub',
      thumbnail: images.find((img) => img.section === 'Living room 2')?.src || '/images/lr2_frontal_seating.jpg',
      images: images.filter((img) => img.section === 'Living room 2'),
    },
    {
      name: 'Full kitchen',
      specs: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Crockery and cutlery',
      thumbnail: images.find((img) => img.section === 'Full kitchen')?.src || '/images/gallery/kitchen_1.jpg',
      images: images.filter((img) => img.section === 'Full kitchen'),
    },
    {
      name: 'Bedroom',
      specs: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi',
      thumbnail: images.find((img) => img.section === 'Bedroom')?.src || '/images/gallery/bedroom_1.jpg',
      images: images.filter((img) => img.section === 'Bedroom'),
    },
    {
      name: 'Full bathroom',
      specs: 'Hairdryer · Hot water · Shampoo · Shower gel',
      thumbnail: images.find((img) => img.section === 'Full bathroom')?.src || '/images/gallery/bathroom_1.jpg',
      images: images.filter((img) => img.section === 'Full bathroom'),
    },
    {
      name: 'Gym',
      specs: 'Air conditioning · Gym · Exercise equipment · Ceiling fan',
      thumbnail: images.find((img) => img.section === 'Gym')?.src || '/images/gallery/gym_1.jpg',
      images: images.filter((img) => img.section === 'Gym'),
    },
    {
      name: 'Exterior',
      specs: 'Amor de Goa residential complex',
      thumbnail: images.find((img) => img.section === 'Exterior')?.src || '/images/gallery/exterior_1.jpg',
      images: images.filter((img) => img.section === 'Exterior'),
    },
    {
      name: 'Pool',
      specs: 'Courtyard swimming pool and sun deck',
      thumbnail: images.find((img) => img.section === 'Pool')?.src || '/images/gallery/pool_1.jpg',
      images: images.filter((img) => img.section === 'Pool'),
    },
    {
      name: 'Additional photos',
      specs: 'Interior design and atmosphere',
      thumbnail: images.find((img) => img.section === 'Additional photos')?.src || '/images/gallery/additional_1.jpg',
      images: images.filter((img) => img.section === 'Additional photos'),
    },
  ];

  const scrollToSection = (sectionName: string) => {
    const el = sectionRefs.current[sectionName];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-white overflow-y-auto custom-scrollbar animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour modal"
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-[#EBEBEB] px-6 lg:px-12 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="p-2 -ml-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222]"
          aria-label="Back to listing"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2]" />
        </button>

        <h2 className="text-base font-semibold text-[#222222]">Photo tour</h2>

        <div className="flex items-center gap-2">
          <button
            onClick={onShare}
            className="p-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222]"
            aria-label="Share options"
          >
            <Share className="w-4 h-4 stroke-[2]" />
          </button>
          <button
            onClick={onToggleSave}
            className="p-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222]"
            aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart
              className={`w-4 h-4 stroke-[2] transition-colors ${
                isSaved ? 'fill-[#FF385C] text-[#FF385C]' : 'text-[#222222]'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Top Room Navigation Bar */}
      <div className="bg-white border-b border-[#EBEBEB] px-6 lg:px-12 py-6 overflow-x-auto custom-scrollbar">
        <div className="max-w-[1200px] mx-auto flex items-center gap-6 min-w-max">
          {sections.map((sec) => (
            <button
              key={sec.name}
              onClick={() => scrollToSection(sec.name)}
              className="flex flex-col items-center gap-2 text-center group cursor-pointer focus:outline-none"
            >
              <div className="w-20 h-14 rounded-lg overflow-hidden border border-[#DDDDDD] group-hover:border-[#222222] transition-colors">
                <img
                  src={getOptimizedImageUrl(sec.thumbnail, 240)}
                  alt={sec.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-semibold text-[#222222] group-hover:text-black">
                {sec.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Section Galleries Container */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12 space-y-16">
        {sections.map((sec) => (
          <div
            key={sec.name}
            ref={(el) => (sectionRefs.current[sec.name] = el)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t first:border-t-0 border-[#EBEBEB] scroll-mt-24"
          >
            {/* Left Column: Room Title and Details (Sticky) */}
            <div className="lg:col-span-4 space-y-3 sticky top-24 self-start">
              <h3 className="text-2xl font-semibold text-[#222222]">{sec.name}</h3>
              <p className="text-sm text-[#717171] leading-relaxed">{sec.specs}</p>
            </div>

            {/* Right Column: Room Photos */}
            <div className="lg:col-span-8 space-y-6">
              {sec.images.length > 0 ? (
                sec.images.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => onImageClick(img.galleryIndex)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onImageClick(img.galleryIndex)}
                    className="group cursor-pointer rounded-xl overflow-hidden border border-[#EBEBEB] bg-[#F7F7F7] shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#222222]"
                    aria-label={`Open photo in lightbox: ${img.alt}`}
                  >
                    <img
                      src={getOptimizedImageUrl(img.src, 1200)}
                      alt={img.alt}
                      onError={(e) => {
                        if (img.localFallback) e.currentTarget.src = img.localFallback;
                      }}
                      className="w-full h-auto max-h-[550px] object-cover group-hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                    {img.caption && (
                      <div className="p-4 bg-white border-t border-[#EBEBEB] text-xs text-[#717171]">
                        {img.caption}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div
                  onClick={() => onImageClick(0)}
                  role="button"
                  tabIndex={0}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-[#EBEBEB] bg-[#F7F7F7]"
                >
                  <img
                    src={getOptimizedImageUrl(sec.thumbnail, 1200)}
                    alt={sec.name}
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

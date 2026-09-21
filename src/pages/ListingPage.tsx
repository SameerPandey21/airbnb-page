import React, { useState, useRef, useEffect } from 'react';
import { propertyData } from '../data/property';
import { Header } from '../components/Header/Header';
import { PropertyHeader } from '../components/PropertyHeader/PropertyHeader';
import { HeroGallery } from '../components/HeroGallery/HeroGallery';
import { PropertySummary } from '../components/PropertySummary/PropertySummary';
import { HostSection } from '../components/HostSection/HostSection';
import { Description } from '../components/Description/Description';
import { SleepingArrangements } from '../components/SleepingArrangements/SleepingArrangements';
import { Amenities } from '../components/Amenities/Amenities';
import { DatePicker } from '../components/DatePicker/DatePicker';
import { BookingCard } from '../components/BookingCard/BookingCard';
import { Reviews } from '../components/Reviews/Reviews';
import { LocationSection } from '../components/LocationSection/LocationSection';
import { HostProfile } from '../components/HostProfile/HostProfile';
import { ThingsToKnow } from '../components/ThingsToKnow/ThingsToKnow';
import { NearbyStays } from '../components/NearbyStays/NearbyStays';
import { Footer } from '../components/Footer/Footer';
import { PhotoTour } from '../components/PhotoTour/PhotoTour';
import { Lightbox } from '../components/Lightbox/Lightbox';
import { Star } from 'lucide-react';

export const ListingPage: React.FC = () => {
  // Modal & Navigation states
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Saved / Wishlist state and toast
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll tracking for sticky sub-nav
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState<'photos' | 'amenities' | 'reviews' | 'location'>('photos');

  // Reservation dates (Oct 18, 2026 - Oct 23, 2026)
  const [checkIn, setCheckIn] = useState<Date | null>(new Date(2026, 9, 18));
  const [checkOut, setCheckOut] = useState<Date | null>(new Date(2026, 9, 23));

  // Section references for in-page navigation
  const photosRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const bookingCardRef = useRef<HTMLDivElement>(null);

  // Handle scroll listener for sticky nav bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolledPastHero(scrollY > 520);

      const amenitiesTop = (amenitiesRef.current?.offsetTop || 1200) - 150;
      const reviewsTop = (reviewsRef.current?.offsetTop || 2200) - 150;
      const locationTop = (locationRef.current?.offsetTop || 3200) - 150;

      if (scrollY >= locationTop) {
        setActiveSection('location');
      } else if (scrollY >= reviewsTop) {
        setActiveSection('reviews');
      } else if (scrollY >= amenitiesTop) {
        setActiveSection('amenities');
      } else {
        setActiveSection('photos');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle share options popup toast at center bottom
  const handleShare = () => {
    setToastMessage('Share options');
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Toggle Save with exact Airbnb toast notification
  const handleToggleSave = () => {
    const nextSaved = !isSaved;
    setIsSaved(nextSaved);
    setToastMessage(nextSaved ? 'Saved to wishlist' : 'Removed from wishlist');
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleOpenPhotoTour = (initialIndex: number = 0) => {
    setActiveImageIndex(initialIndex);
    setPhotoTourOpen(true);
    setLightboxOpen(false);
  };

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handleDatesSelect = (start: Date | null, end: Date | null) => {
    setCheckIn(start);
    setCheckOut(end);
  };

  const handleReserveClick = () => {
    // Exact native Airbnb reserve click behavior: smooth scroll to booking card if scrolled down
    if (bookingCardRef.current) {
      bookingCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222]">
      {/* Top Header */}
      <Header onSearchClick={() => scrollToSection(photosRef)} />

      {/* Sticky Sub-navigation Bar - Only appears when scrolled past hero */}
      {isScrolledPastHero && (
        <div className="sticky top-[73px] z-30 bg-white border-b border-[#EBEBEB] px-6 lg:px-10 shadow-sm transition-all duration-200">
          <div className="max-w-[1120px] mx-auto flex items-center justify-between py-3">
          {/* Left: Section Links */}
          <nav className="flex items-center gap-6 text-sm font-semibold text-[#717171]">
            <button
              onClick={() => scrollToSection(photosRef)}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeSection === 'photos' ? 'text-[#222222]' : 'hover:text-[#222222]'
              }`}
            >
              Photos
              {activeSection === 'photos' && isScrolledPastHero && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#222222]" />
              )}
            </button>
            <button
              onClick={() => scrollToSection(amenitiesRef)}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeSection === 'amenities' ? 'text-[#222222]' : 'hover:text-[#222222]'
              }`}
            >
              Amenities
              {activeSection === 'amenities' && isScrolledPastHero && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#222222]" />
              )}
            </button>
            <button
              onClick={() => scrollToSection(reviewsRef)}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeSection === 'reviews' ? 'text-[#222222]' : 'hover:text-[#222222]'
              }`}
            >
              Reviews
              {activeSection === 'reviews' && isScrolledPastHero && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#222222]" />
              )}
            </button>
            <button
              onClick={() => scrollToSection(locationRef)}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeSection === 'location' ? 'text-[#222222]' : 'hover:text-[#222222]'
              }`}
            >
              Location
              {activeSection === 'location' && isScrolledPastHero && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#222222]" />
              )}
            </button>
          </nav>

          {/* Right: Pricing info and Reserve button */}
          <div className="flex items-center gap-4 animate-fade-in">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-[#222222]">
                  ₹28,499 <span className="text-xs font-normal text-[#717171]">for 5 nights</span>
                </div>
                <div className="flex items-center gap-1 justify-end text-xs text-[#222222]">
                  <Star className="w-3 h-3 fill-black text-black" />
                  <span className="font-semibold">4.95</span>
                  <span className="text-[#717171]">(19)</span>
                </div>
              </div>

              <button
                onClick={handleReserveClick}
                className="bg-gradient-to-r from-[#E61E4D] to-[#D70466] text-white font-semibold text-sm px-6 py-2.5 rounded-lg hover:opacity-95 active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-[1120px] mx-auto px-6 lg:px-0">
        {/* Section: Photos */}
        <div ref={photosRef}>
          <PropertyHeader
            title={propertyData.title}
            isSaved={isSaved}
            onToggleSave={handleToggleSave}
            onShare={handleShare}
          />

          <HeroGallery
            images={propertyData.images}
            onOpenPhotoTour={handleOpenPhotoTour}
          />
        </div>

        {/* 2-Column Grid: Details & Sticky Reservation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative pt-2">
          {/* Left Column (spans 7 cols) */}
          <div className="lg:col-span-7">
            <PropertySummary property={propertyData} />
            <HostSection property={propertyData} />
            <Description paragraphs={propertyData.description} />
            <SleepingArrangements
              rooms={propertyData.rooms}
              onOpenPhotoTour={handleOpenPhotoTour}
            />

            <div ref={amenitiesRef}>
              <Amenities amenities={propertyData.amenities} />
            </div>

            {/* In-line Calendar */}
            <DatePicker
              checkIn={checkIn}
              checkOut={checkOut}
              onDateSelect={handleDatesSelect}
              isInline={true}
            />
          </div>

          {/* Right Column: Sticky Booking Card (spans 5 cols) */}
          <div ref={bookingCardRef} className="lg:col-span-5 relative">
            <BookingCard onReserveClick={handleReserveClick} />
          </div>
        </div>

        {/* Reviews Section */}
        <div ref={reviewsRef}>
          <Reviews property={propertyData} />
        </div>

        {/* Location Section */}
        <div ref={locationRef}>
          <LocationSection location={propertyData.location} />
        </div>

        {/* Host Profile */}
        <HostProfile host={propertyData.host} />

        {/* Policies */}
        <ThingsToKnow data={propertyData.thingsToKnow} />

        {/* Nearby Stays */}
        <NearbyStays stays={propertyData.nearbyStays} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Photo Tour Modal */}
      <PhotoTour
        isOpen={photoTourOpen}
        images={propertyData.images}
        isSaved={isSaved}
        onClose={() => setPhotoTourOpen(false)}
        onImageClick={(index) => {
          setPhotoTourOpen(false);
          handleOpenLightbox(index);
        }}
        onShare={handleShare}
        onToggleSave={handleToggleSave}
      />

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={propertyData.images}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setActiveImageIndex(newIndex)}
        onViewAllPhotos={() => {
          setLightboxOpen(false);
          setPhotoTourOpen(true);
        }}
      />

      {/* Toast Notification (Center Bottom) matching user screenshots */}
      {toastMessage && (
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#222222] text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-2xl animate-fade-in flex items-center justify-center whitespace-nowrap"
          role="status"
          aria-live="polite"
        >
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

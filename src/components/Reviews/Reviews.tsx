import React, { useState } from 'react';
import { Star, X } from 'lucide-react';
import { Property } from '../../types/property';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface ReviewsProps {
  property: Property;
}

// Custom SVG Icons matching Airbnb reference screenshots exactly
const SprayBottleIcon = ({ className = "w-6 h-6 text-[#222222]" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 13h8l2 4v11a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V17l2-4z" />
    <path d="M13 9v4h4V9" />
    <path d="M12 9h7l1-3H13a2 2 0 0 0-2 2z" />
    <path d="M11 10l-2 3" />
    <circle cx="24" cy="7" r="0.75" fill="currentColor" />
    <circle cx="26" cy="10" r="0.75" fill="currentColor" />
    <circle cx="23" cy="11" r="0.75" fill="currentColor" />
  </svg>
);

const AccuracyCircleCheckIcon = ({ className = "w-6 h-6 text-[#222222]" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="16" cy="16" r="11" />
    <path d="M11 16.5l3.5 3.5L21 12" />
  </svg>
);

const CheckinKeyIcon = ({ className = "w-6 h-6 text-[#222222]" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5" />
    <path d="M15.5 15.5L25 25" />
    <path d="M22 22l2.5-2.5" />
    <path d="M24 24l1.5-1.5" />
  </svg>
);

const ChatBubbleIcon = ({ className = "w-6 h-6 text-[#222222]" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-8l-5 4v-4H10a3 3 0 0 1-3-3V8z" />
  </svg>
);

const FoldedMapIcon = ({ className = "w-6 h-6 text-[#222222]" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 8l7-3 6 3 7-3v18l-7 3-6-3-7 3V8z" />
    <path d="M13 5v18" />
    <path d="M19 8v18" />
  </svg>
);

const PriceTagIcon = ({ className = "w-6 h-6 text-[#222222]" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 6l7 7-12 12a2 2 0 0 1-1.4.6H7a1 1 0 0 1-1-1v-7.6a2 2 0 0 1 .6-1.4L21 6z" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const Reviews: React.FC<ReviewsProps> = ({ property }) => {
  const [isOpenAllReviews, setIsOpenAllReviews] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  useLockBodyScroll(isOpenAllReviews);
  const modalRef = useFocusTrap(isOpenAllReviews);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'SprayBottle':
        return <SprayBottleIcon className="w-7 h-7 text-[#222222]" />;
      case 'AccuracyCircleCheck':
        return <AccuracyCircleCheckIcon className="w-7 h-7 text-[#222222]" />;
      case 'CheckinKey':
        return <CheckinKeyIcon className="w-7 h-7 text-[#222222]" />;
      case 'ChatBubble':
        return <ChatBubbleIcon className="w-7 h-7 text-[#222222]" />;
      case 'FoldedMap':
        return <FoldedMapIcon className="w-7 h-7 text-[#222222]" />;
      case 'PriceTag':
        return <PriceTagIcon className="w-7 h-7 text-[#222222]" />;
      default:
        return <Star className="w-7 h-7 text-[#222222]" />;
    }
  };

  return (
    <div className="py-12 border-b border-[#EBEBEB]">
      {/* Big Rating Summary with 3D Shaded Laurel Wreath */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 select-none">
          <img
            src="/images/laurel_large_left.png"
            alt=""
            className="h-[80px] sm:h-[95px] w-auto object-contain"
          />
          <span className="text-[68px] sm:text-[88px] font-extrabold text-[#222222] tracking-tight leading-none">
            {property.rating.toFixed(2)}
          </span>
          <img
            src="/images/laurel_large_right.png"
            alt=""
            className="h-[80px] sm:h-[95px] w-auto object-contain"
          />
        </div>

        <h3 className="font-bold text-[22px] leading-tight text-[#222222] mt-4">
          Guest favourite
        </h3>
        <p className="text-sm sm:text-base text-[#717171] max-w-lg mx-auto mt-1 leading-snug">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button className="text-sm font-semibold underline text-[#222222] mt-2 hover:text-black cursor-pointer">
          How reviews work
        </button>
      </div>

      {/* Subcategory Ratings Row with 7 columns & vertical divider borders */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-4 pb-8 mb-8 border-b border-[#EBEBEB]">
        {/* Column 1: Overall rating with 5-bar distribution */}
        <div className="border-r border-[#DDDDDD] pr-3 sm:pr-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-[#222222] mb-2">Overall rating</div>
            <div className="space-y-1.5">
              {[5, 4, 3, 2, 1].map((ratingVal) => (
                <div key={ratingVal} className="flex items-center gap-2 text-[11px] text-[#222222]">
                  <span className="w-2 font-medium">{ratingVal}</span>
                  <div className="flex-1 h-1 bg-[#EBEBEB] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#222222] rounded-full"
                      style={{
                        width: ratingVal === 5 ? '95%' : ratingVal === 4 ? '5%' : '0%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columns 2-7: Subcategories */}
        {property.reviewCategories.map((cat, idx) => (
          <div
            key={idx}
            className="border-r last:border-r-0 border-[#DDDDDD] pr-3 sm:pr-4 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-semibold text-[#222222] truncate">{cat.name}</div>
              <div className="text-base font-bold text-[#222222] mt-1">{cat.rating.toFixed(1)}</div>
            </div>
            <div className="mt-4 mb-1 text-[#222222]">
              {getCategoryIcon(cat.iconName)}
            </div>
          </div>
        ))}
      </div>

      {/* Rating Tags Filter Row matching screenshot pills */}
      <div className="flex items-center gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {property.ratingTags.map((tag, idx) => {
          const isSelected = selectedTag === tag.name;
          return (
            <button
              key={idx}
              onClick={() => setSelectedTag(isSelected ? null : tag.name)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                isSelected
                  ? 'border-[#222222] bg-[#222222] text-white'
                  : 'border-[#DDDDDD] bg-white text-[#222222] hover:border-[#222222]'
              }`}
            >
              {tag.icon && <span className="text-sm">{tag.icon}</span>}
              <span>{tag.name}</span>
              <span className={isSelected ? 'text-white/80' : 'text-[#717171]'}>
                {tag.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Reviews Grid (2 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-8">
        {property.reviews.slice(0, 6).map((review) => (
          <div key={review.id} className="space-y-3">
            {/* Reviewer Meta */}
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-base text-[#222222] leading-tight">
                  {review.author}
                </h4>
                <p className="text-xs text-[#717171]">
                  {review.durationStay}
                </p>
              </div>
            </div>

            {/* Stars & Date */}
            <div className="flex items-center gap-2 text-xs text-[#222222]">
              <div className="flex items-center gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#222222] text-[#222222]" />
                ))}
              </div>
              <span aria-hidden="true">·</span>
              <span className="font-medium">{review.date}</span>
            </div>

            {/* Comment */}
            <p className="text-sm text-[#222222] leading-relaxed line-clamp-4">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Show all reviews Button */}
      <button
        onClick={() => setIsOpenAllReviews(true)}
        className="border border-[#222222] rounded-xl px-6 py-3 font-semibold text-base text-[#222222] hover:bg-[#F7F7F7] active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#222222]"
      >
        Show all {property.reviewCount} reviews
      </button>

      {/* All Reviews Modal */}
      {isOpenAllReviews && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="all-reviews-title"
          onClick={() => setIsOpenAllReviews(false)}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl animate-slide-up relative"
          >
            <div className="p-6 border-b border-[#EBEBEB] flex items-center justify-between sticky top-0 bg-white rounded-t-2xl z-10">
              <button
                onClick={() => setIsOpenAllReviews(false)}
                className="p-2 -ml-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors focus:outline-none cursor-pointer"
                aria-label="Close reviews modal"
              >
                <X className="w-5 h-5 stroke-[2]" />
              </button>
              <h4 id="all-reviews-title" className="font-semibold text-base text-[#222222]">
                ★ {property.rating.toFixed(2)} · {property.reviewCount} reviews
              </h4>
              <div className="w-8" aria-hidden="true" />
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
              {property.reviews.map((review) => (
                <div key={review.id} className="border-b border-[#EBEBEB] pb-6 last:border-b-0 space-y-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-base text-[#222222]">{review.author}</div>
                      <div className="text-xs text-[#717171]">{review.durationStay} · {review.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#222222] text-[#222222]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#222222] leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

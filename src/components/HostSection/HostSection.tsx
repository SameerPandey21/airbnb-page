import React from 'react';
import { Property } from '../../types/property';

interface HostSectionProps {
  property: Property;
}

// Custom SVG Icons matching Airbnb reference screenshots exactly
const FirePitIcon = ({ className = "w-6 h-6 text-[#222222]" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 17h18c-.5 4.5-4 7-9 7s-8.5-2.5-9-7z" />
    <path d="M16 6c1.5 2.5 3 4.5 1.5 7-.5 1-1.5 1.5-1.5 1.5s-1-.5-1.5-1.5c-1.5-2.5 0-4.5 1.5-7z" />
    <path d="M10 24l-2 3" />
    <path d="M22 24l2 3" />
  </svg>
);

const CeilingFanIcon = ({ className = "w-6 h-6 text-[#222222]" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="16" cy="16" r="2.5" />
    <path d="M16 13.5c0-4.5 3-6.5 6-7.5-1.5 3-1.5 6-3.5 7.5" />
    <path d="M18.5 16c4.5 0 6.5 3 7.5 6-3-1.5-6-1.5-7.5-3.5" />
    <path d="M16 18.5c0 4.5-3 6.5-6 7.5 1.5-3 1.5-6 3.5-7.5" />
    <path d="M13.5 16c-4.5 0-6.5-3-7.5-6 3 1.5 6 1.5 7.5 3.5" />
  </svg>
);

const OpenDoorIcon = ({ className = "w-6 h-6 text-[#222222]" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="7" y="5" width="18" height="22" rx="0.5" />
    <path d="M18 5.5l5 2.5v16l-5 2.5V5.5z" />
    <circle cx="21" cy="16" r="0.75" fill="currentColor" />
  </svg>
);

export const HostSection: React.FC<HostSectionProps> = ({ property }) => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'FirePit':
        return <FirePitIcon className="w-6 h-6 text-[#222222]" />;
      case 'CeilingFan':
        return <CeilingFanIcon className="w-6 h-6 text-[#222222]" />;
      case 'OpenDoor':
        return <OpenDoorIcon className="w-6 h-6 text-[#222222]" />;
      default:
        return <OpenDoorIcon className="w-6 h-6 text-[#222222]" />;
    }
  };

  return (
    <div className="py-6 border-b border-[#EBEBEB]">
      {/* Mini Host Header matching screenshot */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={property.host.avatar}
            alt={property.host.name}
            className="w-10 h-10 rounded-full object-cover shadow-xs"
          />
        </div>
        <div>
          <h3 className="font-semibold text-base text-[#222222]">
            Hosted by {property.host.name}
          </h3>
          <p className="text-sm text-[#717171]">{property.host.joinedDate}</p>
        </div>
      </div>

      <div className="my-6 border-t border-[#EBEBEB]" />

      {/* Feature Highlights List matching screenshot */}
      <div className="space-y-6">
        {property.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-5">
            <div className="mt-0.5 flex-shrink-0 text-[#222222]">
              {getFeatureIcon(feature.iconName)}
            </div>
            <div>
              <h4 className="font-semibold text-base text-[#222222] leading-tight">
                {feature.title}
              </h4>
              <p className="text-sm text-[#717171] mt-1 leading-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

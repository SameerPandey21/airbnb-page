import React, { useState } from 'react';
import { ChevronRight, ChevronUp } from 'lucide-react';

interface DescriptionProps {
  paragraphs: string[];
}

export const Description: React.FC<DescriptionProps> = ({ paragraphs }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      {/* Translation banner matching gray card style in reference screenshot */}
      <div className="bg-[#F7F7F7] rounded-xl p-4 mb-6 text-sm text-[#222222]">
        <span>Some info has been automatically translated. </span>
        <button className="font-semibold underline text-[#222222] hover:text-black cursor-pointer">
          Show original
        </button>
      </div>

      {/* Description Content */}
      <div className="space-y-4 text-base leading-relaxed text-[#222222]">
        <p>{paragraphs[0]}</p>

        {isExpanded && paragraphs.slice(1).map((para, idx) => (
          <p key={idx} className="animate-fade-in">{para}</p>
        ))}
      </div>

      {/* Show more toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 inline-flex items-center gap-1 font-semibold text-base text-[#222222] underline underline-offset-4 hover:text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#222222] rounded py-1"
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? 'Show less' : 'Show more'}</span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 mt-0.5 stroke-[2.5]" />
        ) : (
          <ChevronRight className="w-4 h-4 mt-0.5 stroke-[2.5]" />
        )}
      </button>
    </div>
  );
};

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ThingsToKnow as ThingsToKnowType } from '../../types/property';

interface ThingsToKnowProps {
  data: ThingsToKnowType;
}

export const ThingsToKnow: React.FC<ThingsToKnowProps> = ({ data }) => {
  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      <h3 className="text-[22px] leading-[26px] font-semibold text-[#222222] mb-6">
        Things to know
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: House Rules */}
        <div>
          <h4 className="font-semibold text-base text-[#222222] mb-3">House rules</h4>
          <div className="space-y-2 text-sm text-[#222222] mb-4">
            {data.houseRules.rules.map((rule, idx) => (
              <div key={idx}>{rule}</div>
            ))}
          </div>
          <button
            className="inline-flex items-center gap-1 font-semibold text-sm text-[#222222] underline underline-offset-4 hover:text-black cursor-pointer"
          >
            <span>Show more</span>
            <ChevronRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Column 2: Safety & Property */}
        <div>
          <h4 className="font-semibold text-base text-[#222222] mb-3">Safety & property</h4>
          <div className="space-y-2 text-sm text-[#222222] mb-4">
            {data.safetyAndProperty.items.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
          <button
            className="inline-flex items-center gap-1 font-semibold text-sm text-[#222222] underline underline-offset-4 hover:text-black cursor-pointer"
          >
            <span>Show more</span>
            <ChevronRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Column 3: Cancellation Policy */}
        <div>
          <h4 className="font-semibold text-base text-[#222222] mb-3">
            {data.cancellationPolicy.title}
          </h4>
          <p className="text-sm text-[#222222] leading-relaxed mb-4">
            {data.cancellationPolicy.summary}
          </p>
          <button
            className="inline-flex items-center gap-1 font-semibold text-sm text-[#222222] underline underline-offset-4 hover:text-black cursor-pointer"
          >
            <span>Show more</span>
            <ChevronRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>
      </div>
    </div>
  );
};

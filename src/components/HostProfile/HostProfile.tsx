import React from 'react';
import { Star, Award, Shield, GraduationCap, Calendar } from 'lucide-react';
import { Host } from '../../types/property';

interface HostProfileProps {
  host: Host;
}

export const HostProfile: React.FC<HostProfileProps> = ({ host }) => {
  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      <h3 className="text-[22px] leading-[26px] font-semibold text-[#222222] mb-6">
        Meet your host
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Host Badge Card */}
        <div className="bg-white border border-[#DDDDDD] rounded-3xl p-6 shadow-card max-w-sm">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-3">
              <img
                src={host.avatar}
                alt={host.name}
                className="w-24 h-24 rounded-full object-cover shadow-sm border"
              />
              <div className="absolute bottom-0 right-0 bg-[#FF385C] text-white p-1.5 rounded-full shadow">
                <Award className="w-4 h-4 fill-current" />
              </div>
            </div>

            <h4 className="text-2xl font-bold text-[#222222]">{host.name}</h4>
            <div className="text-sm text-[#717171] mt-0.5 flex items-center gap-1 font-medium">
              <span>Host</span>
            </div>

            <div className="w-full grid grid-cols-2 gap-4 my-6 pt-6 border-t border-[#EBEBEB] text-center">
              <div>
                <div className="text-xl font-bold text-[#222222]">{host.reviewCount}</div>
                <div className="text-xs text-[#717171] font-medium">Reviews</div>
              </div>
              <div className="border-l border-[#EBEBEB] pl-4">
                <div className="text-xl font-bold text-[#222222] flex items-center justify-center gap-1">
                  {host.rating} <Star className="w-3.5 h-3.5 fill-black text-black" />
                </div>
                <div className="text-xs text-[#717171] font-medium">Rating</div>
              </div>
            </div>

            <div className="w-full pt-4 border-t border-[#EBEBEB] text-center">
              <div className="text-xl font-bold text-[#222222]">5</div>
              <div className="text-xs text-[#717171] font-medium">Years hosting</div>
            </div>
          </div>
        </div>

        {/* Host Details & Co-hosts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Co-hosts section */}
          {host.coHosts && host.coHosts.length > 0 && (
            <div>
              <h5 className="font-semibold text-base text-[#222222] mb-3">Co-Hosts</h5>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {host.coHosts.map((coHost, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img
                      src={coHost.avatar}
                      alt={coHost.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="text-xs text-[#222222] font-medium truncate">
                      {coHost.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Host stats */}
          <div className="space-y-3 pt-2">
            <h5 className="font-semibold text-base text-[#222222]">Host details</h5>
            <div className="text-sm text-[#222222] space-y-1">
              <div>Response rate: {host.responseRate}</div>
              <div>Responds within an hour</div>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#222222] pt-2">
              <Calendar className="w-4 h-4 text-[#717171]" />
              <span>Born in the 80s</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#222222]">
              <GraduationCap className="w-4 h-4 text-[#717171]" />
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <button className="border border-[#222222] rounded-lg px-6 py-3 font-semibold text-base text-[#222222] hover:bg-[#F7F7F7] active:scale-95 transition-all cursor-pointer">
              Message host
            </button>
          </div>

          {/* Security Notice */}
          <div className="flex items-center gap-3 text-xs text-[#717171] pt-4 border-t border-[#EBEBEB]">
            <Shield className="w-5 h-5 text-[#FF385C] flex-shrink-0" />
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

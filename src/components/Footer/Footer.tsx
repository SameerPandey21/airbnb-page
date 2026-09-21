import React from 'react';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7F7F7] border-t border-[#DDDDDD] mt-12 py-10 px-6 lg:px-10 text-[#222222]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#DDDDDD] text-sm">
          <div>
            <h5 className="font-semibold mb-3">Support</h5>
            <ul className="space-y-2 text-[#717171]">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Hosting</h5>
            <ul className="space-y-2 text-[#717171]">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Airbnb</h5>
            <ul className="space-y-2 text-[#717171]">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & localization */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-[#717171] gap-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold text-[#222222]">
            <button className="flex items-center gap-2 hover:underline cursor-pointer">
              <Globe className="w-4 h-4" />
              <span>English (IN)</span>
            </button>
            <button className="hover:underline cursor-pointer">
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

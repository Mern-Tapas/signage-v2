import React, { useRef } from 'react';
import { Settings, Shield, Palette, Bell, User, Lock, Globe, Smartphone, Mail, CreditCard } from 'lucide-react';

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  id: number;

}

export default function HorizontalScrollMenu({ className }: { className?: string; }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    { icon: Settings, label: 'Access & User', id: 1 },
    { icon: Shield, label: 'Privacy & Security', id: 2 },
    { icon: Palette, label: 'Branding', id: 3 },
    { icon: Bell, label: 'Notifications', id: 4 },
    { icon: User, label: 'Profile', id: 5 },
    { icon: Lock, label: 'Permissions', id: 6 },
    { icon: Globe, label: 'Language', id: 7 },
    { icon: Smartphone, label: 'Devices', id: 8 },
    { icon: Mail, label: 'Email', id: 9 },
    { icon: CreditCard, label: 'Billing', id: 10 },
  ];

  const scroll = (direction: 'left' | 'right'): void => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`w-full overflow-hidden bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable Menu */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide px-12"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="flex gap-4 min-w-max">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className="flex items-center gap-3 px-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all hover:shadow-md whitespace-nowrap group"
                >
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Indicator */}

    </div>
  );
}
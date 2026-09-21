import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

interface DatePickerProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onDateSelect: (start: Date | null, end: Date | null) => void;
  isInline?: boolean;
  onClose?: () => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  checkIn,
  checkOut,
  onDateSelect,
  isInline = false,
  onClose,
}) => {
  // Reference months in video are October and November 2026
  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(new Date(2026, 9, 1)); // Oct 2026

  const nextMonthDate = new Date(
    currentMonthDate.getFullYear(),
    currentMonthDate.getMonth() + 1,
    1
  );

  const prevMonth = () => {
    setCurrentMonthDate(
      new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonthDate(
      new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (dayDate: Date) => {
    if (!checkIn || (checkIn && checkOut)) {
      // Start new selection
      onDateSelect(dayDate, null);
    } else {
      // Second click: if clicked date is before checkIn, reset checkIn
      if (dayDate < checkIn) {
        onDateSelect(dayDate, null);
      } else if (dayDate.getTime() === checkIn.getTime()) {
        onDateSelect(null, null);
      } else {
        onDateSelect(checkIn, dayDate);
        if (!isInline && onClose) {
          onClose();
        }
      }
    }
  };

  const clearDates = () => {
    onDateSelect(null, null);
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const renderMonth = (monthStart: Date) => {
    const year = monthStart.getFullYear();
    const month = monthStart.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const days: (Date | null)[] = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(new Date(year, month, d));
    }

    return (
      <div className="flex-1 min-w-[280px]">
        <div className="font-semibold text-center text-base text-[#222222] mb-4">
          {formatMonthYear(monthStart)}
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#717171] mb-2">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-y-1">
          {days.map((date, idx) => {
            if (!date) {
              return <div key={`empty-${idx}`} className="h-10 w-10" />;
            }

            const dateTime = date.getTime();
            const checkInTime = checkIn ? checkIn.getTime() : null;
            const checkOutTime = checkOut ? checkOut.getTime() : null;

            const isStart = checkInTime && dateTime === checkInTime;
            const isEnd = checkOutTime && dateTime === checkOutTime;
            const isInRange =
              checkInTime && checkOutTime && dateTime > checkInTime && dateTime < checkOutTime;

            let buttonClasses =
              'h-10 w-10 rounded-full text-sm font-semibold flex items-center justify-center transition-all cursor-pointer';

            if (isStart || isEnd) {
              buttonClasses += ' bg-[#222222] text-white hover:bg-black';
            } else if (isInRange) {
              buttonClasses += ' bg-[#F7F7F7] text-[#222222] rounded-none hover:rounded-full hover:bg-[#DDDDDD]';
            } else {
              buttonClasses += ' text-[#222222] hover:bg-[#F7F7F7]';
            }

            return (
              <div
                key={date.toISOString()}
                className={`flex items-center justify-center ${
                  isInRange ? 'bg-[#F7F7F7]' : ''
                } ${isStart ? 'rounded-l-full' : ''} ${isEnd ? 'rounded-r-full' : ''}`}
              >
                <button
                  onClick={() => handleDateClick(date)}
                  className={buttonClasses}
                  aria-label={date.toDateString()}
                >
                  {date.getDate()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Calculate nights count
  const calculateNights = () => {
    if (!checkIn || !checkOut) return null;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();

  return (
    <div className={`w-full ${isInline ? 'py-8 border-b border-[#EBEBEB]' : 'p-4'}`}>
      {isInline && (
        <div className="mb-6">
          <h3 className="text-[22px] leading-[26px] font-semibold text-[#222222]">
            {nights ? `${nights} nights in Candolim` : 'Select dates'}
          </h3>
          <p className="text-sm text-[#717171] mt-1">
            {checkIn && checkOut
              ? `${checkIn.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} - ${checkOut.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`
              : 'Add your travel dates for exact pricing'}
          </p>
        </div>
      )}

      {/* Navigation Arrows */}
      <div className="relative">
        <div className="flex justify-between items-center mb-2 px-2">
          <button
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-[#F7F7F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222]"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5 text-[#222222]" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-[#F7F7F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222]"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5 text-[#222222]" />
          </button>
        </div>

        {/* Dual Month Calendar */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {renderMonth(currentMonthDate)}
          {renderMonth(nextMonthDate)}
        </div>
      </div>

      {/* Keyboard and Clear dates CTA */}
      <div className="flex items-center justify-between mt-4">
        <button
          className="p-1 text-[#222222] hover:bg-[#F7F7F7] rounded cursor-pointer"
          aria-label="Keyboard shortcuts"
        >
          <Keyboard className="w-5 h-5 stroke-[1.6]" />
        </button>
        <button
          onClick={clearDates}
          className="text-sm font-semibold text-[#222222] underline hover:text-black py-1 px-2 rounded cursor-pointer"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
};

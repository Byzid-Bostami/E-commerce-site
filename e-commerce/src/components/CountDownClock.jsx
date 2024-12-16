import React, { useState, useEffect } from 'react';

const CountdownClock = () => {
    const targetDate = '2025-02-02T23:59:59';
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null; // Countdown is over
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="font-bold text-red-500">Offer Expired!</div>;
  }

  return (
    <div className="flex items-center space-x-3 text-xl font-bold uppercase">
      <div className="px-2 py-1 text-center rounded-md shadow-lg bg-white/65">
        <p className="text-black">{timeLeft.days}</p>
      </div> 
      <div  className="px-2 py-1 text-center rounded-md shadow-lg bg-white/65">
        <p  className="text-black">{timeLeft.hours}</p>
      </div>
      <div  className="px-2 py-1 text-center rounded-md shadow-lg bg-white/65">
        <p  className="text-black">{timeLeft.minutes}</p>
      </div>
      <div  className="px-2 py-1 text-center rounded-md shadow-lg bg-white/65">
        <p  className="text-black">{timeLeft.seconds}</p>
      </div>
    </div>
  );
};

export default CountdownClock;

import React from 'react';

interface CTAButtonProps {
  text: string;
  subtext?: string;
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, subtext, onClick, className = "" }) => {
  return (
    <div className={`flex flex-col items-center gap-3 w-full max-w-md mx-auto ${className}`}>
      <button
        onClick={onClick}
        className="group relative w-full bg-green-600 hover:bg-green-500 text-white font-bold py-5 px-8 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex flex-col items-center justify-center overflow-hidden"
      >
        <span className="relative z-10 text-xl md:text-2xl uppercase tracking-tight">{text}</span>
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>
      {subtext && (
        <p className="text-gray-500 text-sm font-medium animate-pulse">
          {subtext}
        </p>
      )}
    </div>
  );
};

export default CTAButton;

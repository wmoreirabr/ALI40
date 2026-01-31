
import React from 'react';
import { TestimonialData } from '../types';

const Testimonial: React.FC<TestimonialData> = ({ name, text, rating }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-4">
      <div className="flex text-yellow-400 gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <i key={i} className="fa-solid fa-star"></i>
        ))}
      </div>
      <p className="italic text-gray-700 leading-relaxed">"{text}"</p>
      <p className="font-bold text-gray-900 mt-auto">— {name}</p>
    </div>
  );
};

export default Testimonial;

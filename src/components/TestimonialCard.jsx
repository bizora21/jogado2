import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-start space-x-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-3 border-yellow-400"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <Quote className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
          <div className="rating mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`inline w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <blockquote className="text-gray-700 italic leading-relaxed mt-4">
        "{testimonial.comment}"
      </blockquote>
      
      {testimonial.product && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Produto:</span> {testimonial.product}
          </p>
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500">
        Verificado • {testimonial.date}
      </div>
    </div>
  );
};

export default TestimonialCard;


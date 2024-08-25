'use client'
import { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Full Stack Developer",
    company: "TechCorp",
    quote: "GibWork has revolutionized how I contribute to open source. The platform's ease of use and the quality of projects available are unmatched.",
    image: "https://github.com/shadcn.png" 
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "UI/UX Designer",
    company: "DesignHub",
    quote: "As a designer, I never thought I'd find my place in open source. GibWork changed that, connecting me with projects that value design thinking.",
    image: "https://github.com/shadcn.png" 
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Blockchain Developer",
    company: "CryptoInnovate",
    quote: "The Web3 projects on GibWork are cutting-edge. It's the perfect platform for staying ahead in the rapidly evolving blockchain space.",
    image: "https://github.com/shadcn.png" 
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-900 py-12 sm:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">What Our Community Says</h2>
      <div className="relative">
        <div className="flex items-center justify-center">
          <button onClick={prevTestimonial} className="absolute left-0 text-purple-500 hover:text-purple-400 transition-colors z-10">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="w-full max-w-2xl overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 text-center px-4"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 sm:mb-6 object-cover"
                  />
                  <blockquote className="text-base sm:text-xl font-medium mb-4 sm:mb-6 text-gray-300">
                    <FaQuoteLeft className="inline-block mr-2 text-purple-500" />
                    {testimonial.quote}
                    <FaQuoteRight className="inline-block ml-2 text-purple-500" />
                  </blockquote>
                  <cite className="block font-bold text-sm sm:text-lg text-white mb-1">
                    {testimonial.name}
                  </cite>
                  <p className="text-xs sm:text-sm text-purple-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={nextTestimonial} className="absolute right-0 text-purple-500 hover:text-purple-400 transition-colors z-10">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  );
}
'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: 'Their innovative solutions transformed our workflow. Highly recommend their expertise!',
    name: 'Maxin Will',
    title: 'Product Manager',
    company: 'DOORDASH',
    initials: 'MW',
  },
  {
    id: 2,
    rating: 4,
    text: 'Exceptional custom software that perfectly fits our needs. Great team to work with!',
    name: 'John Doe',
    title: 'Hiring Manager',
    company: 'Dubizzle Lab',
    initials: 'JD',
  },
  {
    id: 3,
    rating: 3,
    text: 'Outstanding support and cutting-edge tech that boosted our efficiency. Amazing service!',
    name: 'Will Smith',
    title: 'Software Engineer',
    company: 'Sakook',
    initials: 'WS',
  }
];

const CardSwiper = () => {
  const thumbsSwiperRef = useRef(null);

  // Group testimonials into sets of 6 (2 rows of 3)
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 6) {
    groupedTestimonials.push(testimonials.slice(i, i + 6));
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  handleResize(); // Initial check
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div className="swiper-container">
      {/* Main Swiper */}
      {
        isMobile ? (
          <div className='grid mobileGrid'>
          {
            testimonials.map((testimonial, index) => {
              return (
                  <TestimonialCard data={testimonial} key={index} />
              );
            })
          }
        </div>
        ) : (
          <>
          <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          thumbs={{ swiper: thumbsSwiperRef.current }}
          modules={[Pagination, Thumbs]}
          className="mySwiper"
          simulateTouch={true} // Enable swipe on desktop
          touchRatio={1} // Default touch sensitivity
          grabCursor={true} // Show grab cursor on hover
        >
          {groupedTestimonials.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid">
                {group.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} data={testimonial} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
      <div className="swiper-pagination hidden md:block"></div>
      </>
        )
      }
     
      

      


      

{/* <Swiper
        onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="thumbsSwiper"
      >
        {groupedTestimonials.map((_, index) => (
          <SwiperSlide key={index}>
            <div className="thumb-item">
              Slide {index + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}

      <style jsx>{`
        .swiper-container {
          position: relative;
          width: 100%;
          max-width: 1400px;  
          margin: 0 auto;
        }

        .mySwiper {
          padding: 20px 0;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, auto);
          gap: 20px;
          box-sizing: border-box;
        }

        .swiper-pagination {
          position: relative;
          bottom: auto;
          margin-top: 30px;
          text-align: center;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #999;
          opacity: 1;
          margin: 0 6px;
          border-radius: 50%;
        }

        .swiper-pagination-bullet-active {
          background: #007aff;
          width: 14px;
          height: 14px;
        }

        .thumbsSwiper {
          display: none; /* Hidden by default */
          margin-top: 20px;
        }

        .thumb-item {
          background: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 10px;
          text-align: center;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .thumb-item:hover {
          background: #e0e0e0;
        }

        .swiper-slide-thumb-active .thumb-item {
          background: #007aff;
          color: #fff;
          border-color: #005bb5;
        }

        .mobileGrid:{
          display: none;
        }

        /* Show thumbsSwiper on mobile */
        @media (max-width: 768px) {
          .thumbsSwiper {
            display: block;
          }
          .grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, auto);
          },
          
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .thumbsSwiper {
            slides-per-view: 3;
          },
        }
      `}</style>
    </div>
  );
};

export default CardSwiper;
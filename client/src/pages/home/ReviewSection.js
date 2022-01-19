import React from 'react';
import pic1 from '../../images/pic-1.png';
import pic2 from '../../images/pic-2.png';
import pic3 from '../../images/pic-3.png';
import pic4 from '../../images/pic-4.png';
import pic5 from '../../images/pic-5.png';
import pic6 from '../../images/pic-6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const ReviewSection = () => {
  return (
    <>
      <section className='reviews' id='reviews'>
        <h1 className='heading'>
          Client's <span>Reviews</span>
        </h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop='true'
          autoplay='true'
          grabCursor='true'
          centeredSlides='true'
          className='reviews-slider'
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className='box'>
            <img src={pic1} alt />
            <div className='content'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                quaerat. Nobis ullam ea officiis possimus veritatis eos corrupti
                sed eius.
              </p>
              <h3>John Doe</h3>
              <div className='stars'>
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStarHalfAlt} className='i' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='box'>
            <img src={pic2} alt />
            <div className='content'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                quaerat. Nobis ullam ea officiis possimus veritatis eos corrupti
                sed eius.
              </p>
              <h3>John Doe</h3>
              <div className='stars'>
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStarHalfAlt} className='i' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='box'>
            <img src={pic3} alt />
            <div className='content'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                quaerat. Nobis ullam ea officiis possimus veritatis eos corrupti
                sed eius.
              </p>
              <h3>John Doe</h3>
              <div className='stars'>
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStarHalfAlt} className='i' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='box'>
            <img src={pic4} alt />
            <div className='content'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                quaerat. Nobis ullam ea officiis possimus veritatis eos corrupti
                sed eius.
              </p>
              <h3>John Doe</h3>
              <div className='stars'>
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStarHalfAlt} className='i' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='box'>
            <img src={pic5} alt />
            <div className='content'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                quaerat. Nobis ullam ea officiis possimus veritatis eos corrupti
                sed eius.
              </p>
              <h3>John Doe</h3>
              <div className='stars'>
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStarHalfAlt} className='i' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='box'>
            <img src={pic6} alt />
            <div className='content'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                quaerat. Nobis ullam ea officiis possimus veritatis eos corrupti
                sed eius.
              </p>
              <h3>John Doe</h3>
              <div className='stars'>
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStar} className='i' />
                <FontAwesomeIcon icon={faStarHalfAlt} className='i' />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className='swiper-pagination' />
      </section>
    </>
  );
};

export default ReviewSection;

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Virtual  } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';

const ScrollingImageGallery = () => {
    const swiperRef = useRef(null); // Create a ref for the Swiper component

    return (
        <div onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()} onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}>
            <Swiper
                ref={swiperRef}
                modules={[FreeMode, Autoplay]}
                loop
                slidesPerView='auto'
                spaceBetween={10}
                speed={2000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                }}
                grabCursor
                maxRatio={1}
            >
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/tank_top/Joshua_J-1web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/tank_top/Joshua_J-2web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/tank_top/Joshua_J-3web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/tank_top/Joshua_J-4web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/tank_top/Joshua_J-5web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/tank_top/Joshua_J-6web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/tank_top/Joshua_J-7web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/tank_top/Joshua_J-8web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/boxing/Joshua_J-9web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/boxing/Joshua_J-10web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/boxing/Joshua_J-11web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/boxing/Joshua_J-12web.jpg' alt='' /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img loading='lazy' src='src/assets/images/boxing/Joshua_J-13web.jpg' alt='' /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ScrollingImageGallery;
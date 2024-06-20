import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Virtual } from 'swiper/modules';

const photoCategories = {
    "tank_top": [1, 9],
    "boxing": [9, 19],
    "mercedes": [19, 29],
    "black_suit": [29, 39]
}


// Import Swiper styles
import 'swiper/css';

// time complexity can be seen as O(n)
const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
};

const addImagePaths = (photos, highlight) => { 
    Array(photoCategories[highlight][1] - photoCategories[highlight][0]).fill(0).map((_, index) => {
        photos.push(`${highlight}/Joshua_J-${photoCategories[highlight][0] + index}web.webp`);
    });
};

const ScrollingImageGallery = ({highlight}) => {
    const swiperRef = useRef(null); // Create a ref for the Swiper component
    const [mainImage, setMainImage] = useState("");
    const [currentPhotoSet, setCurrentPhotoSet] = useState([]);
    const [transition, setTransition] = useState(false);
    

    useEffect(() => {
        setTransition(true);

        const photos = [];
            
        
        if (highlight) {
            addImagePaths(photos, highlight);
        } else {
            Object.keys(photoCategories).forEach((current_highlight) => {
                addImagePaths(photos, current_highlight);
            });

            shuffle(photos);
        }

        setCurrentPhotoSet(photos);

        setTimeout(() => {
            setTransition(false);
        }, 500)

        if (swiperRef.current) {
            setTimeout(() => {
                // the changes in highlights make swiper freeze so adding a small delay makes sure we always get the slider running after we changes a photoset
                swiperRef.current.swiper.autoplay.start();
            }, 200)
        }
    }, [highlight]);

    const displayLargeImage = (source) => {
        console.log(source);
    }

    return (
        // the reason for onMouseLeave and onPointerDown is because swiper stops working if dragged back and forth in a short amount of time 
        <div id={transition ? "scrolling-gallery" : ""} onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()} onMouseLeave={() => swiperRef.current.swiper.autoplay.start()} onPointerDown={() => {setTimeout(() => {swiperRef.current.swiper.autoplay.start();}, 200)}}>
            <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                loop
                slidesPerView={4}
                spaceBetween={10}
                speed={2000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                }}
                grabCursor
            >{
                currentPhotoSet.map((imagePath, index) => 
                    <SwiperSlide key={highlight + "-" + index} className='swiper-slide'><img onClick={() => displayLargeImage(imagePath)} loading='lazy' src={`src/assets/images/slides/${imagePath}`} alt='' /></SwiperSlide>
                )
            }</Swiper>
        </div>
    );
}

export default ScrollingImageGallery;
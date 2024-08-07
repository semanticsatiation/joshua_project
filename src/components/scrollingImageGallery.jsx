import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Zoom } from 'swiper/modules';
import FullImage from "./svgs/fullImage";
import GridImages from "./svgs/gridImages";
import { getCloudFrontUrl } from "../utils/imageHelper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';

const photoCategories = {
    "tank_top": [1, 9],
    "boxing": [9, 19],
    "mercedes": [19, 29],
    "black_suit": [29, 39]
}


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
    const swiperRef = useRef(null);
    const zoomRef = useRef(null);

    const [currentPhotoSet, setCurrentPhotoSet] = useState([]);
    const [galleryTransition, setGalleryTransition] = useState(true);

    const [mainImage, setMainImage] = useState("");
    const [isGrid, setIsGrid] = useState(false);
    
    useEffect(() => {
        setGalleryTransition(false);

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
            setGalleryTransition(true);
        }, 0);

        if (swiperRef.current) {
            setTimeout(() => {
                // the changes in highlights make swiper freeze so adding a small delay makes sure we always get the slider running after we changes a photoset
                swiperRef.current.swiper.autoplay.start();
            }, 200)
        }
    }, [highlight]);

    const navigatePhotoSet = (direction) => {
        const currentMainindex = currentPhotoSet.findIndex((element) => element === mainImage);
        let newIndex = currentMainindex + (direction === "l" ? (-1) : (1));
        
        if (newIndex >= currentPhotoSet.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = currentPhotoSet.length - 1;
        }

        setMainImage(currentPhotoSet[newIndex]);
    }

    const closeGallery = (event) => {
        const target = event.target;

        if (target.id === "main-image-container" || target.id === "main-image-wrapper" || target.id === "exit-button") {
            document.body.classList.remove("no-scroll");
            setMainImage("");
        }
    }

    const setTargetImage = (imagePath) => {
        document.body.classList.add("no-scroll");
        setMainImage(imagePath);
    }

    return (
        <div className={`${galleryTransition ? "transition-gallery" : ""} ${isGrid ? "grid" : "full-image"}`} id="gallery">
            {
                mainImage && (
                    <div onClick={closeGallery} id='main-image-wrapper'>
                        <div id='main-image-container'>
                            <h2>JOSHUA DRUMMOND</h2>

                            <div id="gallery-formats">
                                <div>
                                    <FullImage isGrid={isGrid} setIsGrid={setIsGrid}/>
                                    <GridImages isGrid={isGrid} setIsGrid={setIsGrid}/>
                                </div>
                                <img id="exit-button" className="icon" onClick={closeGallery} loading='lazy' src={getCloudFrontUrl('assets/svgs/font_awesome/exit.svg')} />
                            </div>

                            {
                                isGrid ? (
                                    <ul id="image-grid">{
                                        currentPhotoSet.map((imagePath, index) =>
                                            <li>
                                                <img onClick={() => setTargetImage(imagePath)} loading='lazy' src={getCloudFrontUrl(`assets/images/high_quality_images/large_images/${imagePath}`)} />
                                            </li>
                                        )
                                    }</ul>
                                ) : (
                                    <div id="full-image-container">
                                        <span onClick={() => navigatePhotoSet("l")}  id="left-arrow">{"<"}</span>
                                        <Swiper
                                            ref={zoomRef}
                                            modules={[Navigation, Zoom]}
                                            navigation={{
                                                nextEl: '#right-arrow',
                                                prevEl: '#left-arrow',
                                            }}
                                            zoom={{
                                                maxRatio: 2,
                                                minRatio: 1
                                            }}
                                            loop
                                            grabCursor
                                            >{
                                                currentPhotoSet.map((imagePath, index) =>
                                                    <SwiperSlide key={highlight + "-" + index} className='swiper-slide'>
                                                    <div className="swiper-zoom-container">
                                                        <img onClick={() => setTargetImage(imagePath)} loading='lazy' src={getCloudFrontUrl(`assets/images/high_quality_images/large_images/${imagePath}`)} />
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        }</Swiper>
                                        <span onClick={() => navigatePhotoSet("r")} id="right-arrow">{">"}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
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
                    <SwiperSlide key={highlight + "-" + index} className='swiper-slide'><img onClick={() => setTargetImage(imagePath)} loading='lazy' src={getCloudFrontUrl(`assets/images/slides/${imagePath}`)} /></SwiperSlide>
                )
            }</Swiper>
        </div>
    );
}

export default ScrollingImageGallery;
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper"
import 'swiper/css'
import 'swiper/css/free-mode'
import weather from '../assets/weatherrangers.png';
import bank from '../assets/bank.png';
import memories from '../assets/memories.png';

export default function Carousel() {
    return (
        <div className="container">
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                slidesPerView={5}
                spaceBetween={30}
            >
                <SwiperSlide>
                    <h1>Slide 1 </h1>
                    {/* <h1>Slide 4 </h1>es" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 2 </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 4 </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 5 </h1>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

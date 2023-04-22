import React, { useRef } from 'react'
import { Carousel } from 'antd'
import '../styles/slider.scss'
import Slider1 from '../images/slider-1.png'
import Slider2 from '../images/slider-2.png'
import Slider3 from '../images/slider-3.png'
import Slider4 from '../images/slider-4.png'
import Slider5 from '../images/slider-5.png'
import Slider6 from '../images/slider-6.png'
import Slider7 from '../images/slider-7.png'
import BackIcon from '../images/backIcon.png'

export default function Slider() {
    const carouselRef = useRef(null)

    return (
        <div className="slider">
            <Carousel
                autoplay
                autoplaySpeed={5000}
                dotPosition="bottom"
                className="slideshow"
                ref={carouselRef}
            >
                <div>
                    <img src={Slider1} alt="" />
                </div>
                <div>
                    <img src={Slider2} alt="" />
                </div>
                <div>
                    <img src={Slider3} alt="" />
                </div>
                <div>
                    <img src={Slider4} alt="" />
                </div>
                <div>
                    <img src={Slider5} alt="" />
                </div>
                <div>
                    <img src={Slider6} alt="" />
                </div>
                <div>
                    <img src={Slider7} alt="" />
                </div>
            </Carousel>
            <div className="next-prev-icons">
                <img
                    src={BackIcon}
                    alt=""
                    className="backicon"
                    onClick={() => carouselRef.current.prev()}
                />
                <img
                    src={BackIcon}
                    alt=""
                    className="nexticon"
                    onClick={() => carouselRef.current.next()}
                />
            </div>
        </div>
    )
}

import React from 'react'
import { useState } from 'react'
import Slider1 from '../images/slider-1.png'
import Slider2 from '../images/slider-2.png'
import Slider3 from '../images/slider-3.png'
import '../styles/slider.scss'

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)

    const slides = [
        { image: `${Slider1}`, caption: 'Slide 1' },
        { image: `${Slider2}`, caption: 'Slide 2' },
        { image: `${Slider3}`, caption: 'Slide 3' },
    ]

    function showSlide(index) {
        setSlideIndex(index)
    }

    function nextSlide() {
        if (slideIndex < slides.length - 1) {
            setSlideIndex(slideIndex + 1)
        } else {
            setSlideIndex(0)
        }
    }

    setInterval(nextSlide, 5000)

    return (
        <div className="slider-container">
            <div
                className="slider"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="caption">{slide.caption}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

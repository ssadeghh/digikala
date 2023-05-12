import React from 'react'

import '../styles/digikalasuggestion.scss'
import data from '../data/data.json'

export default function DigikalaSuggestion() {
    const products = data.Body.DigikalaSuggestion
    return (
        <div className="digikala-suggestion-main">
            <div className="digikala-suggestion-content">
                <h2>پیشنهاد دیجی‌کالا</h2>
            </div>
            <div className="digikala-suggestion-table">
                <div className="main-digikala-suggestion-table">
                    <div className="swiper-wrapper">
                        {products.map((product) => (
                            <div className="swiper-wrapper-list-horizontal" key={product.id}>
                                <div className="inner-swiper-wrapper-list-horizontal">
                                    <a href="">
                                        <div className="each-product-digi-category">
                                            <div className="inner-each-product-digi-category">
                                                <div className="image-product-style">
                                                    <img src={product.image1} alt="" />
                                                </div>
                                            </div>
                                            <h4></h4>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="each-product-digi-category">
                                            <div className="inner-each-product-digi-category">
                                                <div className="image-product-style">
                                                    <img src={product.image2} alt="" />
                                                </div>
                                            </div>
                                            <h4></h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

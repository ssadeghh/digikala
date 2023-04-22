import React, { useRef } from 'react'
import '../styles/card.scss'
import data from '../data/data.json'
import '../styles/slider.scss'

export default function Card() {
    const cardRef = useRef(null)
    const products = data.suggestion_product
    return (
        <div className="card">
            {products.map((product) => (
                <div className="card-style">
                    <div key={product.id}>
                        <img
                            src={require(`../images/products/${product.image}`)}
                            alt=""
                        />
                        <div className="under-img"></div>
                        <div className="all-about-price">
                            <div className="two-columns-price-discount">
                                <div className="inside-price">
                                    <div className="discount">
                                        <span>۱۵٪</span>
                                    </div>
                                    <div className="price-and-unit">
                                        <span>۷,۸۳۱,۸۹۰</span>
                                        تومان
                                    </div>
                                </div>
                            </div>
                            <div className="before-discount-price">
                                <div className="price-without-discount">
                                    ۹,۲۳۴,۳۸۰
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

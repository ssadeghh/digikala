import React, { useRef, useState } from 'react'
import '../styles/card.scss'
import data from '../data/data.json'
import '../styles/slider.scss'
import BackIcon from '../images/backIcon.png'

export default function Card() {
    const [translateXValue, setTranslateXValue] = useState(0)
    const cardRef = useRef(null)
    const products = data.suggestion_product

    const handleTranslateXIncrease = () => {
        setTranslateXValue((prevValue) => prevValue + 184)
    }

    const handleTranslateXDecrease = () => {
        setTranslateXValue((prevValue) => prevValue - 184)
    }
    const root = document.querySelector(':root')
    if (root) {
        root.style.setProperty('--translate-x', `${translateXValue}px`)
    }

    return (
        <div className="card">
            {products.map((product) => (
                <div
                    className={`card-style ${product.className ? 'more' : 'final'}`}
                >
                    <div key={product.id} className='cont'>
                        <img
                            src={require(`../images/products/${product.image}`)}
                            alt=""
                            className={`${product.className ? '' : 'final'}`}
                        />
                        <div className="under-img"></div>
                        <div
                            className={`all-about-price ${
                                product.className ? '' : 'final'
                            }`}
                        >
                            <div
                                className={`two-columns-price-discount `}
                            >
                                <div className="inside-price">
                                    <div className="discount">
                                        <span>
                                            {product.discount
                                                ? product.discount
                                                : ''}
                                        </span>
                                    </div>
                                    <div className="price-and-unit">
                                        {product.price ? (
                                            <span>{product.price} تومان</span>
                                        ) : (
                                            ''
                                        )}
                                        {product.more ? product.more : ''}
                                    </div>
                                </div>
                            </div>
                            <div className="before-discount-price">
                                <div className="price-without-discount">
                                    {product.beforeDiscount
                                        ? product.beforeDiscount
                                        : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="next-prev-icons">
                <button
                    className={`nexticon ${
                        translateXValue === 0 ? 'hiddenStyle' : ''
                    }`}
                    disabled={translateXValue === 0}
                    onClick={handleTranslateXDecrease}
                >
                    &#8249;
                </button>
                <button
                    className={`backicon ${
                        translateXValue === 1288 ? 'hiddenStyle' : ''
                    }`}
                    disabled={translateXValue===1288}
                    onClick={handleTranslateXIncrease}
                >
                    &#8250;
                </button>
            </div>
        </div>
    )
}

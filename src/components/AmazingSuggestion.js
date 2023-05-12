import React, { useRef, useState } from 'react'
import Card from './Card'
import '../styles/amazingsuggestion.scss'
import BackIcon from '../images/backIcon.png'
import orangeJet_haeder from '../images/orangeJet-haeder.png'
import paypal_header from '../images/paypal-header.png'
import mission_header from '../images/mission-haeder.png'
import digiplus_header from '../images/digiplus-haeder.png'
import digicheck_header from '../images/digicheck-haeder.png'
import freshImg from '../images/products/fresh.png'
import freshSvg from '../images/products/fresh.svg'
import supermarket_header from '../images/supermarket-haeder.png'
import ds_header from '../images/ds-header.png'
import box from '../images/box.png'
import moreIcon from '../images/more.png'
import { ReactComponent as AmazingIconSVG } from '../images/Amazings.svg'
import { ReactComponent as ArrowLeft } from '../images/arrowLeft.svg'
import data from '../data/data.json'

export default function AmazingSuggestion() {
    const images_under_slider = data.image_for_banner_under_slider
    return (
        <div className="amazing-suggestion">
            <div className="top-container">
                <div className="flash">
                    <img src={orangeJet_haeder} alt="" />
                    <p>دیجی‌کالا جت</p>
                </div>
                <div className="flash">
                    <img src={paypal_header} alt="" />
                    <p>خرید اقساطی</p>
                </div>
                <div className="flash">
                    <img src={mission_header} alt="" />
                    <p>ماموریت‌ها</p>
                </div>
                <div className="flash">
                    <img src={digiplus_header} alt="" />
                    <p>دیجی پلاس</p>
                </div>
                <div className="flash">
                    <img src={digicheck_header} alt="" />
                    <p>دیجی‌کالا سرویس</p>
                </div>
                <div className="flash">
                    <img src={supermarket_header} alt="" />
                    <p>ماه رمضان</p>
                </div>
                <div className="flash">
                    <img src={ds_header} alt="" />
                    <p>حراج استایل</p>
                </div>
                <div className="flash">
                    <img src={moreIcon} alt="" className="more" />
                    <p>بیشتر</p>
                </div>
            </div>
            <div className="suggest">
                <div className="first-card-suggest">
                    <div className="inside-first-card-suggest">
                        <AmazingIconSVG className="amazing-icon" />
                        <img src={box} alt="" className="box" />
                        <div className="text">مشاهده همه &gt;</div>
                    </div>
                </div>
                <Card />
            </div>
            <div className="bottom-card-suggest">
                <div>
                    <a href="">
                        <div className="first-div-in-a"></div>
                        <div className="second-div-in-a"></div>
                        <div className="third-div-in-a">
                            <div className="title">
                                <img src={freshImg} alt="" />
                            </div>
                            <div className="text-title">
                                <img src={freshSvg} alt="" />
                            </div>
                            <div className="discount-title">
                                <p>تا ۴۰٪ تخفیف</p>
                            </div>
                        </div>
                        <div className="fourth-div-in-a">
                            <div className="icon-insdie-fourth-div">
                                {images_under_slider.map((image) => (
                                    <a href="">
                                        <div className="overflow-h">
                                            <div className="title-customize">
                                                <picture>
                                                    <img
                                                        src={image.image}
                                                        alt=""
                                                    />
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="discount-price">
                                            <span className="num">25%</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className="more-products">
                                <span>بیش از 100 کالا</span>
                                <div className='flash'><ArrowLeft/></div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

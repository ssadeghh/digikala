import React, { useRef, useState } from 'react';
import Card from './Card'
import '../styles/amazingsuggestion.scss'
import BackIcon from '../images/backIcon.png'
import orangeJet_haeder from '../images/orangeJet-haeder.png'
import paypal_header from '../images/paypal-header.png'
import mission_header from '../images/mission-haeder.png'
import digiplus_header from '../images/digiplus-haeder.png'
import digicheck_header from '../images/digicheck-haeder.png'
import supermarket_header from '../images/supermarket-haeder.png'
import ds_header from '../images/ds-header.png'
import box from '../images/box.png'
import moreIcon from '../images/more.png'
import { ReactComponent as AmazingIconSVG } from '../images/Amazings.svg'

export default function AmazingSuggestion() {
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
        </div>
    )
}

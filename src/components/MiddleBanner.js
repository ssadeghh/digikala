import React from 'react'

import '../styles/middlebanner.scss'

import data from '../data/data.json'

export default function MiddleBanner() {
    const banner = data.Body.MiddleBanner
    return (
        <div className="middle-banner-main">
            {banner.map((ban) => (
                <a href="">
                    <div key={ban.id}>
                        <div className="image">
                            <picture>
                                <img src={ban.image} alt="" />
                            </picture>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}

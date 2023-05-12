import React from 'react'
import data from '../data/data.json'

import '../styles/fourHeaderBanner.scss'

export default function FourHeaderBanner() {
    const Banners = data.Body.TopBanner
  return (
    <div className='Banner'>
        {Banners.map((banner) => (
            <a>
                <div>
                    <div key={banner.id} className='image'>
                        <picture>
                            <img src={require(`../images/Body/TopHeader/${banner.image}`)} alt="" />
                        </picture>
                    </div>
                </div>
            </a>
        ))}
    </div>
  )
}

import React from 'react'
import data from '../data/data.json'

import '../styles/digikalacategory.scss'

export default function DigikalaCategory() {
    const icons = data.Body.HeaderIcons
    return (
        <div className="categori-digikala-main">
            <div className="inner-main">
                <h3>دسته‌بندی‌های دیجی‌کالا</h3>

                <div className="category">
                    {icons.map((icon) => (
                        <span className="category-icons">
                            <a href="">
                                <div className="icon">
                                    <picture>
                                        <img src={icon.image} alt="" />
                                    </picture>
                                </div>
                                <p>{icon.content}</p>
                            </a>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

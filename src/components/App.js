import React from 'react'
import '../styles/App.scss'
import top_header_banner from '../images/top-header-banner.jpg'
import Navigation from './Navigation'
import Slider from './Slider'
import AmazingSuggestion from './AmazingSuggestion'

export default function App() {
    return (
        <div>
            <main>
                <img
                    src={top_header_banner}
                    alt=""
                    style={{ height: '60px' }}
                    className="top-header-banner"
                />
                <Navigation />
                <Slider/>
                <AmazingSuggestion/>
                <div className="container">s</div>
            </main>
        </div>
    )
}

import React from 'react'
import '../styles/App.scss'
import Navigation from './Navigation'
import Slider from './Slider'
import AmazingSuggestion from './AmazingSuggestion'
import Body from './Body'

export default function App() {
    return (
        <div>
            <main>
                {/* header */}
                <Navigation />
                <Slider/>
                <AmazingSuggestion/>

                {/* body */}
                <div className="container">
                    <Body/>
                </div>
            </main>
        </div>
    )
}

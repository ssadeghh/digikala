import React from 'react'
import FourHeaderBanner from './FourHeaderBanner'
import DigikalaCategory from './DigikalaCategory'
import MiddleBanner from './MiddleBanner'
import DigikalaSuggestion from './DigikalaSuggestion'

export default function Body() {
  return (
    <div>
        <FourHeaderBanner/>
        <DigikalaCategory/>
        <MiddleBanner/>
        <DigikalaSuggestion/>
    </div>
  )
}

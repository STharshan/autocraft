import React from 'react'
import PaintWorkSection from '../components/Gallery/PaintWorkSection'
import BodyWorkSection from '../components/Gallery/BodyWorkSection'
import GalleryHeader from '../components/Gallery/GalleryHeader'

const Gallery = () => {
  return (
    <div>
      <GalleryHeader />
      <PaintWorkSection />
      <BodyWorkSection />
    </div>
  )
}

export default Gallery

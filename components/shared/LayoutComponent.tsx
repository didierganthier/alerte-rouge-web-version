import React from 'react'
import Navbar from './Navbar'
import FooterComponent from './Footer'
import Hero from './Hero'

const LayoutComponent = ({children, imageUrl, hero = false}: any) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        {hero && <Hero imageUrl={imageUrl} />}
        {children}
        <FooterComponent />
    </div>
  )
}

export default LayoutComponent
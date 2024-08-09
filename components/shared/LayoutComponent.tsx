import React from 'react'
import Navbar from './Navbar'
import FooterComponent from './Footer'
import Hero from './Hero'

const LayoutComponent = ({children, imageUrl, hero = false, dvh=false}: any) => {
  return (
    <div className={`bg-muted flex flex-col ${dvh? "min-h-screen" : "min-h-dvh"}`}>
        <Navbar />
        {hero && <Hero imageUrl={imageUrl} />}
        {children}
        <FooterComponent />
    </div>
  )
}

export default LayoutComponent
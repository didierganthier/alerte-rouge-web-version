import React from 'react'
import Navbar from './Navbar'
import FooterComponent from './Footer'
import Hero from './Hero'

const LayoutComponent = ({children}: any) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <Hero imageUrl="https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/448388556_18027610481504500_8701504396152498592_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEgztwsn37freTz3Eyx1_QR5_s2xZBPKeHn-zbFkE8p4d4g1ia7rPjvlzPsNuH3Re5x2L37pvGIRkqRnx3K7FFi&_nc_ohc=X3ZklNZXGDAQ7kNvgHTo3Um&_nc_ht=scontent-sof1-1.xx&oh=00_AYC1Rqh6vN8Z-oPEfyL6bGFaBJhGfZnDbujdWM4vn8mMOQ&oe=66B2A3EB" />
        {children}
        <FooterComponent />
    </div>
  )
}

export default LayoutComponent
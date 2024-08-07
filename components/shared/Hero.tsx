import Link from 'next/link'
import React from 'react'

const Hero = ({imageUrl}: any) => {
    return (
        <section className="relative w-full h-[75vh] bg-gradient-to-r from-[#ff5a5f]/90 to-[#ff5a5f]/70 flex items-center justify-center">
            <div className="absolute inset-0">
                <img
                    src={imageUrl}
                    alt="Blood donation"
                    className="object-cover w-full h-full opacity-50"
                />
            </div>
            <div className="relative z-10 max-w-3xl text-center text-primary-foreground">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Gout San Sove Lavi</h1>
                <p className="text-xl mt-4">
                    Bay san pou sove lavi. Fè yon don kounye a pou ede moun ki nan bezwen.
                </p>
                {/* <Link
                    href="#"
                    className="inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium bg-[#ff0000] hover:bg-[#ffffff] hover:text-[#ff0000] shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-6"
                    prefetch={false}
                >
                    Donate Now
                </Link> */}
            </div>
        </section>
    )
}

export default Hero
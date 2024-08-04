import React from 'react'

const NavbarItem = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='py-3 px-2'>
        {children}
    </div>
  )
}

export default NavbarItem
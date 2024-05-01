'use client'
import { useState } from 'react';

import { ThemeToggle } from '@/components/ui/ThemeToggle';

import HamBurgerMenu from './HamBurgerMenu';
import Navigation from './Navigation';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleClick = () => {
    setNavOpen(prevValue => !prevValue)
  }

  return (
    <>
      <div className='fixed w-full max-w-[100vw] h-16 z-50 bg-background border-b-2 border-input'>
        <div className='flex items-center justify-between h-full px-4 mx-auto  max-w-screen-3xl md:gap-20'>
          <div className=' text-[2.2rem] text duration-500 font-semibold group cursor-pointer'>
            <p className='animatedHeading font-signature'>
              <span className='text-transparent'>Spam</span>
              <span className='text-transparent'>Detector</span>
            </p>
          </div>
          <Navigation ulClass="hidden md:flex flex-1 justify-between" />
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <HamBurgerMenu handleClick={handleClick} navOpen={navOpen} />
          </div>
          <Navigation handleClick={handleClick} ulClass={` duration-500 ${navOpen ? "translate-x-0" : "translate-x-80 "} border-l border-input flex flex-col h-screen bg-background w-60 top-0 right-0 absolute items-center justify-between gap-10 pb-8 pt-24`} />
        </div>
      </div>
      <div className="h-16"></div>
    </>
  )
}

export default Navbar;
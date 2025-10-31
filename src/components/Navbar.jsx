import React from 'react'
import { navLinks } from '../constants'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from './Button'

const Navbar = () => {
    const [scrolled, setscrolled] = useState(false)
    useEffect(() => {
      const handleScroll = ()=> {
        const isScrolled = window.scrollY > 10
        setscrolled(true)
      }

      window.addEventListener('scroll', handleScroll)
      return ()=> window.removeEventListener("scroll", handleScroll)
    }, [])
    
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a href="#hero" className='logo'>GSB | Bishwasa</a>

                <nav className='desktop'>
                    <ul>
                        {
                            navLinks.map(({ link, name }) => (
                                <li key={name} className='group'>
                                    <a href={link}>
                                        <span>{name}</span>
                                        <span className='underline' />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <a href="#" className='contact-btn group'>
                    <div className="inner">
                        <span>get my resume offline</span>
                    </div>
                </a>
                {/* <Button className="md:w-60 md:h-16 w-60 h-12" id='button' text='get my resume ' /> */}
            </div>
        </header>
    )
}

export default Navbar
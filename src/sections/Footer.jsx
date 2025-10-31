import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className='flex flex-col justify-center items-center md:items-start'>
                    <a href="">made with ❤️ by me.</a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className='icon' target='_blank' href={img.url}>
                            <img src={img.imgPath} alt="socials" />
                        </a>
                    ))}
                </div>

<div className='flex flex-col justify-center'>
<p className='text-center md:text-end'>
    &copy; {new Date().getFullYear()} GSB | Bishwasa. All rights reserved.
</p>
</div>

            </div>
        </footer>
    )
}

export default Footer
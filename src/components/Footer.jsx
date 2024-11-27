import React from 'react'
import {FaDiscord, FaTwitter, FaGithub, FaTwitch} from "react-icons/fa";


const links = [
    {href: 'https://discord.com', icon: <FaDiscord />},
    {href: 'https://twitter.com', icon: <FaTwitter />},
    {href: 'https://twitch.com', icon: <FaTwitch />},
    {href: 'https://github.com', icon: <FaGithub />},

]

const Footer = () => {
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-5 flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <p className="text-center text-sm md:text-left">
                &copy; 2025  All rights reserved.

            </p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((link) => (
                        <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
Privacy Policy

                </a>
            </div>
        </footer>
    )
}
export default Footer

import React, { useState } from 'react'
import Icon from './Icon'
import NavItem from './NavItem'

const NavBar = () => {

    const [nav, setNav] = useState('hidden')

    const pages = ['home', 'about', 'characters']

    const pageLinks = pages.map(page => {
        return (
            page === 'home' ? { text:'home', link:'' } : { text: page, link: page }
        )
    })

    const toggleNav = () => {
        setNav(nav === 'hidden' ? 'block' : 'hidden')
    }

    return (
        <div className='py-1 px-4 border-0 border-b-8 border-t-8 border-red-500 border-solid'>
            <div className='sm:hidden'>
                <Icon 
                    icon='hamburger'
                    pointer 
                    toggleNav={toggleNav} 
                    nav={nav}                          
                />
            </div>            
            <div className={`${nav} sm:flex justify-between sm:w-fit mx-auto`}>
                {pageLinks.map((pageLink, index) => (
                    <NavItem index={index} text={pageLink.text} link={pageLink.link}/>
                ))}
            </div>
        </div>
    )
}

export default NavBar

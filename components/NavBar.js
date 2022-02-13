import React, { useState } from 'react'
import Icon from './Icon'
import NavItem from './NavItem'
import { motion } from 'framer-motion'

const NavBar = () => {

    const [showNav, setNav] = useState(false)

    const pages = ['home', 'about', 'characters']

    const pageLinks = pages.map(page => {
        return (
            page === 'home' ? { text:'home', link:'' } : { text: page, link: page }
        )
    })

    const toggleNav = () => {
        setNav(!showNav ? true : false)
    }

    const navItemVariants = {
        open: { opacity: 1 },
        closed: { opacity: 1 }
    }

    const navBarVariants = {
        open: {  },
        closed: { y: -150 }
    }

    return (
        <>
            <div className='hidden sm:block py-1 px-4 border-t-8 border-red-500'>                
                <motion.div
                    transition={{duration: 0.5}}
                    variants={navItemVariants}
                    animate={!showNav ? 'closed' : 'open'}
                    className={`${!showNav ? 'hidden' : 'block'} sm:flex justify-between sm:w-fit mx-auto`}>
                    {/* {nav items} */}
                    {pageLinks.map((pageLink, index) => (
                        <NavItem 
                            index={index} 
                            text={pageLink.text} 
                            link={pageLink.link}
                            // onClick={toggleNav}                        
                        />
                    ))}
                </motion.div>
            </div>
            <div className='sm:hidden py-1 px-4 border-t-8 border-red-500'>
                <div className='sm:hidden'>
                    <Icon 
                        icon='hamburger'
                        pointer 
                        toggleNav={toggleNav} 
                        showNav={showNav}                          
                    />
                </div>            
                <motion.div
                    transition={{duration: 0.5}}
                    variants={navItemVariants}
                    animate={!showNav ? 'closed' : 'open'}
                    className={`${!showNav ? 'hidden' : 'block'} sm:flex justify-between sm:w-fit mx-auto`}>
                    {/* {nav items} */}
                    {pageLinks.map((pageLink, index) => (
                        <NavItem 
                            index={index} 
                            text={pageLink.text} 
                            link={pageLink.link}
                            onClick={toggleNav}                        
                        />
                    ))}
                </motion.div>
            </div>
            <motion.div 
                animate={!showNav ? 'closed' : 'open'}
                variants={navBarVariants} 
                // transition={{duration: 1}}
                className={`${showNav ? 'block' : 'hidden'} border-b-8 border-red-500`}                
            ></motion.div>
            <div
                className={`${!showNav ? 'block' : 'hidden'} border-b-8 border-red-500`}
            ></div>
        </>
    )
}

export default NavBar

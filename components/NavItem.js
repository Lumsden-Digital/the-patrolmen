import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const NavItem = (props) => {
    return (
        <div className=' relative sm:mx-3 my-1 sm:my-0 cursor-pointer'>
            <button             
                onClick={props.onClick}
            >
                <Link href={`/${props.link}`}>
                    <motion.h5
                        className='font-heading text-xs uppercase'
                        // style={{fontSize: '30px'}}
                        animate={{opacity:1}} 
                        initial={{opacity:0}}
                        transition={{duration: 3}}                                       
                    >
                        {props.text}                                    
                    </motion.h5>
                </Link>

            </button>
        </div>
    )
}

export default NavItem

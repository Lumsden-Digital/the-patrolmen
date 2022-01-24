import Link from 'next/link'
import React from 'react'

const NavItem = (props) => {
    return (
        <div className='sm:mx-3 my-2 sm:my-1 cursor-pointer'>
            <Link href={`/${props.link}`}>
                <h5 className='font-heading text-xs uppercase'>{props.text}</h5>
            </Link>
        </div>
    )
}

export default NavItem

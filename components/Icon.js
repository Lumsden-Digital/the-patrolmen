import React from 'react'

const Icon = (props) => {
    if (props.pointer && props.icon === 'hamburger')    
    return (
        <div className='max-w-min cursor-pointer'>
            
            <h3 className='font-brand'>
                <button onClick={props.toggleNav}>{!props.showNav ? 'e' : 'x'}</button>
            </h3>
        </div>
    )

    return (
        <div className='max-w-min'>
            <h3 className='font-brand'>e</h3>
        </div>
    )

}

export default Icon

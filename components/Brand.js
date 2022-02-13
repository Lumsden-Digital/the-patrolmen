import React from 'react'
import { motion } from 'framer-motion'

const Brand = () => {
    return (
        <div className='py-3'>
            <motion.p 
                className='font-brand relative
                text-6xl sm:text-6xl md:text-7xl text-center 
                text-red-800'
                animate={{y: 0}}
                initial={{y:-100}}
                transition={{delay: .5}}
            >
                <div
                    className='hidden absolute text-xs bg-white inset-x-12 inset-y-2 w-fit'
                >The</div>
                patrolmen
            </motion.p>
        </div>
    )
}

export default Brand

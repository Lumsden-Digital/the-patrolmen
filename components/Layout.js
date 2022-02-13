import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <main className='h-screen max-w-full'>
            <Header />
            { children }
        </main>
    )
}

export default Layout

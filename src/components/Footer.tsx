import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className='pb-4 flex items-center justify-center text-gray-500'>&copy; {year} Deborah Reads A Lot</div>
    )
}

export default Footer
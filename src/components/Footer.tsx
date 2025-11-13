import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className='pb-4 flex items-center justify-center text-slate-700 text-xs '>&copy; {year} Deborah Reads A Lot</div>
    )
}

export default Footer
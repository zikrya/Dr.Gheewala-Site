import React from 'react'

const Navbar = () => {
  return (
<div className='sticky top-0 z-50 mx-auto w-full border-white/5 px-2 backdrop-blur transition-all duration-200 sm:rounded-lg sm:border sm:bg-white/5 sm:px-6 lg:px-8 py-4'>
    <div className='flex justify-between items-center'>
        <div>
            <h1 className='text-2xl'>Anup R. Gheewala, MD</h1>
        </div>
        <div className='flex space-x-4 text-lg'>
            <h2>Locations</h2>
            <h2>Free Virtual Consultations</h2>
            <h2>Contact</h2>
        </div>
    </div>
</div>
  )
}

export default Navbar

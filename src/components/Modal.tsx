import React from 'react'

const Modal = () => {
    return (
        <div className='absolute top-9 left-0 w-full min-h-svh z-50 py-1 px-3 bg-gray-700 text-white'>
            <div className='flex flex-col items-center gap-3'>
                <div className='flex flex-col items-center gap-1'>
                    <h3>About me</h3>
                    <h3>Skills</h3>
                    <h3>Portfolio</h3>
                    <h3>Contact me</h3>
                </div>

                <h2>my name is Adam</h2>
                <h2>I’M A DEVELOPER</h2>
            </div>
        </div>
    )
}

export default Modal
import React, { useState } from 'react'
import ExampleMan from '../assets/header/example_man.png';
import github from '../assets/common/social_links/github.svg'
import inkedin from '../assets/common/social_links/inkedin.svg'
import telegram from '../assets/common/social_links/telegram.svg'
import itb from '../assets/common/ITB.svg';
import { AtSymbolIcon, LinkIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

type Props = {}

const Introdution = (props: Props) => {
  return (
    <div className='w-full overflow-hidden font-raleway bg-black text-white'>
      <div className='relative flex flex-row justify-between'>
        <div className='polygonclass absolute w-full opacity-90 bg-gray-600 bottom-0 py-28 pb-8 left-0 flex items-center justify-around'>
          <div className='flex flex-col w-2/3 gap-2'>
            <p className='text-lg'>Hi, I am</p>
            <p className='text-2xl'>Adam Esmurziev</p>
            <p className='text-base'>Front-end Developer / UI Designer.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <a href="https://github.com/Esmurzelly"><img src={github} className='w-5' /></a>
            <a href="https://ru.linkedin.com/in/adam-esmurzelly-469355280"><img src={inkedin} className='w-5' /></a>
            <a href="https://t.me/Esmurzelly"><img src={telegram} className='w-5' /></a>
          </div>
        </div>

        {/* <img className='' src={ExampleMan} alt="man" />  delete absolute and realative*/}
        <img className='w-full' src={ExampleMan} alt="man" />
      </div>

      <div className='relative bg-[#1D1D1D] flex flex-col justify-center items-center py-3'>
        <div className='absolute flex flex-col gap-4 text-center w-full px-4'>
          <p className='text-xl font-semibold font-montserrat'>IT BERRIES</p>
          <p className='font-open_sans text-sm'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
          <button className='relative font-montserrat text-base font-semibold uppercase mx-auto w-[200px]
            after:content-[""] after:absolute after:w-[2px] after:h-6 after:bg-white after:left-12 after:top-0
            before:content-[""] before:absolute before:w-[2px] before:h-6 before:bg-white before:right-12 before:top-0
            '>More</button>
        </div>
        <img className='' src={itb} alt="itb" />
      </div>
    </div>
  )
}

export default Introdution
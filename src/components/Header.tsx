import React, { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import LogoLight from '../assets/header/light_logo.svg';
import LogoDark from '../assets/header/dark_logo.svg';
import Modal from './Modal';

type Props = {}

const Header = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const handleChangeModal = () => setShowModal(!showModal);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      setIsTopOfPage(false)
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed over top-0 left-0 z-50 w-full  text-white`}>
      <div className={`${isTopOfPage ? 'opacity-100' : "opacity-95"} bg-[#0B0B0B] p-3 w-full flex flex-row justify-between items-center`}>
        <div className='logo'>
          <img src={LogoLight} className='w-7' alt="LogoLight" />
          {/* <img src={LogoDark} className='hidden w-7' alt="LogoDark" /> */}
        </div>

        {showModal 
          ? <XMarkIcon className='w-7' onClick={handleChangeModal} /> 
          : <Bars3Icon className='w-7' onClick={handleChangeModal} />
        }
      </div>
    
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import LogoLight from '../assets/header/light_logo.svg';
import LogoDark from '../assets/header/dark_logo.svg';
import Modal from './Modal';

type Props = {}

const Header = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChangeModal = () => setShowModal(!showModal)

  return (
    <div className='w-full bg-[#0B0B0B] text-white flex flex-row py-1 px-3 justify-between items-center'>
      <div className='logo'>
        <img src={LogoLight} className='w-7' alt="LogoLight" />
        {/* <img src={LogoDark} className='hidden w-7' alt="LogoDark" /> */}
      </div>

      {showModal ? <>
        <XMarkIcon className='w-7' onClick={handleChangeModal} />
        <Modal />
      </>
        : <Bars3Icon className='w-7' onClick={handleChangeModal} />}
    </div>
  )
}

export default Header
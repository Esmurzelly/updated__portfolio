import React from 'react';
import separatedLine from '../assets/about/separatorWhite.svg';
import mailIcon from '../assets/common/social_links/forModal/mailIcon.svg';
import githubIcon from '../assets/common/social_links/forModal/githubIcon.svg';
import linkedinIcon from '../assets/common/social_links/forModal/linkedinIcon.svg';

type Props = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

const Modal = ({ showModal, setShowModal }: Props) => {
  
  return (
    <div className={`absolute font-montserrat text-center top-12 left-0 ${showModal ? 'translate-x-0' : 'translate-x-full'} transition-all w-full min-h-svh z-50 py-1 bg-modal-background bg-cover bg-top text-white`}>
      <div className="flex flex-col items-center">
        <ul className="flex flex-col items-center gap-3 w-full">
          <li className='hover:bg-white cursor-pointer w-full hover:text-black py-2'>
            <a onClick={() => setShowModal(false)} href="#about">About me</a>
          </li>
          <li className='hover:bg-white cursor-pointer w-full hover:text-black py-2'>
            <a onClick={() => setShowModal(false)} href="#skills">Skills</a>
          </li>
          <li className='hover:bg-white cursor-pointer w-full hover:text-black py-2'>
            <a onClick={() => setShowModal(false)} href="#projects">Projects</a>
          </li>
          <li className='hover:bg-white cursor-pointer w-full hover:text-black py-2'>
            <a onClick={() => setShowModal(false)} href="#contact">Contact me</a>
          </li>
        </ul>

        <div className='mt-8 flex flex-col items-center gap-3'>
          <h2 className='text-xl'>My name is Adam</h2>
          <h2 className='uppercase text-3xl mt-1'>I’m a developer</h2>
        </div>
        
        <img className="my-8 text-white" src={separatedLine} alt="separatedLine" />

        <div className='flex flex-row items-center gap-5'>
          <img className='w-8' src={mailIcon} alt="mailIcon" />
          <img className='w-8' src={githubIcon} alt="githubIcon" />
          <img className='w-8' src={linkedinIcon} alt="linkedinIcon" />
        </div>
      </div>
    </div>
  );
};

export default Modal;

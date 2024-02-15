import React from 'react';

type Props = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

const Modal = ({ showModal, setShowModal }: Props) => {
  return (
    <div className={`absolute text-center top-12 left-0 ${showModal ? 'translate-x-0' : 'translate-x-full'} transition-all w-full min-h-svh z-50 py-1 px-3 bg-gray-700 text-white`}>
      <div className="flex flex-col items-center">
        <ul className="flex flex-col items-center gap-3">
          <li>
            <a onClick={() => setShowModal(false)} href="#about">About me</a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="#skills">Skills</a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="#projects">Projects</a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="#contact">Contact me</a>
          </li>
        </ul>

        <div className='mt-4 flex flex-col items-center gap-3'>
          <h2>my name is Adam</h2>
          <h2>I’M A DEVELOPER</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;

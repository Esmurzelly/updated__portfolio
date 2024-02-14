import React from 'react';

type Props = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

const Modal = ({ showModal, setShowModal }: Props) => {
  return (
    <div className={`absolute top-12 left-0 ${showModal ? 'translate-x-0' : 'translate-x-full'} transition-all w-full min-h-svh z-50 py-1 px-3 bg-gray-700 text-white`}>
      <div className="flex flex-col items-center gap-3">
        <ul className="flex flex-col items-center gap-1">
          <li>
            <a onClick={() => setShowModal(false)} href="#">About me</a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="#">Skills</a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="#">Portfolio</a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="#">Contact me</a>
          </li>
        </ul>

        <h2>my name is Adam</h2>
        <h2>I’M A DEVELOPER</h2>
      </div>
    </div>
  );
};

export default Modal;

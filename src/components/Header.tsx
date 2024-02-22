import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import LogoLight from '../assets/header/light_logo.svg';
// import LogoDark from '../assets/header/dark_logo.svg';
import Modal from './Modal';

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const handleChangeModal = () => setShowModal(!showModal);
  const handleChangeOverflow = () =>
    showModal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto');

  const handleScroll = () =>
    window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false);

  useEffect(() => {
    handleChangeOverflow();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showModal]);

  return (
    <section
      id="header"
      className={`fixed block_link top-0 left-0 z-50 w-full bg-[#0B0B0B] text-white ${
        isTopOfPage || showModal ? 'opacity-100' : 'opacity-95'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-5">
        <div
          className={`py-3 w-full flex flex-row justify-between items-center`}
        >
          <div className="logo">
            <img
              src={LogoLight}
              className="w-7 cursor-pointer"
              alt="LogoLight"
            />
          </div>

          <nav className="hidden md:flex w-2/3 font-montserrat text-center">
            <ul className='flex flex-row items-center gap-3 w-full'>
              {[
                ['Home', '#'],
                ['About', '#about'],
                ['Skills', '#skills'],
                ['Projects', '#projects'],
                ['Contact', '#contact'],
              ].map(([title, url]) => (
                <li
                  key={title}
                  className="flex hover:bg-white rounded-lg cursor-pointer w-full hover:text-black py-2"
                >
                  <a href={url} className='w-full'>{title}</a>
                </li>
              ))}

            </ul>
          </nav>

          <div className="flex md:hidden">
            {showModal ? (
              <XMarkIcon
                className="w-7 cursor-pointer"
                onClick={handleChangeModal}
              />
            ) : (
              <Bars3Icon
                className="w-7 cursor-pointer"
                onClick={handleChangeModal}
              />
            )}
          </div>
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default Header;

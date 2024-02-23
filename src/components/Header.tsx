import { useEffect, useRef, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import LogoLight from '../assets/header/light_logo.svg';
import Modal from './Modal';

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', showModal);
    document.body.classList.toggle('overflow-auto', !showModal);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTopOfPage(!entry.isIntersecting)
      },
      { threshold: [0] }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    };

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [showModal, headerRef]);

  return (
    <section id="header" ref={headerRef} className={`fixed top-0 left-0 z-50 w-full bg-darker_layout text-white ${isTopOfPage || showModal ? 'opacity-100' : 'opacity-95'}`}>
      <div className="max-w-screen-2xl mx-auto px-5 py-3">
        <div className='w-full flex flex-row justify-between items-center'>
          <a href='#' className="logo">
            <img src={LogoLight} className="w-7 cursor-pointer" alt="LogoLight" />
          </a>

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
                onClick={toggleModal}
              />
            ) : (
              <Bars3Icon
                className="w-7 cursor-pointer"
                onClick={toggleModal}
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

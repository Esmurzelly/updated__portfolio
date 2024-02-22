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
    <div
      className={`absolute font-montserrat text-center top-12 left-0 ${
        showModal ? 'translate-x-0' : 'translate-x-full'
      } transition-all w-full min-h-svh z-50 py-1 bg-gradient-to-b from-[#0B0B0B] to-gray-500 bg-cover bg-top text-white`}
    >
      <div className="flex flex-col items-center">
        <nav className="w-full">
          <ul className="flex flex-col items-center gap-3 w-full">
            {[
              ['Home', '#'],
              ['About', '#about'],
              ['Skills', '#skills'],
              ['Projects', '#projects'],
              ['Contact', '#contact'],
            ].map(([title, url]) => (
              <li
                key={title}
                className="flex hover:bg-white cursor-pointer w-full hover:text-black py-2"
              >
                <a
                  className="w-full"
                  onClick={() => setShowModal(false)}
                  href={url}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col items-center gap-3">
          <h2 className="text-xl">My name is Adam</h2>
          <h2 className="uppercase text-3xl mt-1">I’m a developer</h2>
        </div>

        <img
          className="my-8 text-white"
          src={separatedLine}
          alt="separatedLine"
        />

        <div className="flex flex-row items-center gap-5">
          <img className="w-8" src={mailIcon} alt="mailIcon" />
          <img className="w-8" src={githubIcon} alt="githubIcon" />
          <img className="w-8" src={linkedinIcon} alt="linkedinIcon" />
        </div>
      </div>
    </div>
  );
};

export default Modal;

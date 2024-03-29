import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import facebookIcon from '../assets/common/social_links/facebook.svg';
import linkedinIcon from '../assets/common/social_links/inkedin__footer.svg';
import instagramIcon from '../assets/common/social_links/instagram.svg';
import mailIcon from '../assets/common/social_links/mail.svg';


const Footer = () => {
  const handleOnTopPage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="w-full px-4 py-7 font-montserrat bg-[#1A1A1A] text-center text-white">
      <div className="max-w-screen-2xl mx-auto px-5 flex flex-col items-center justify-center">
        <div onClick={() => handleOnTopPage()} className="cursor-pointer mt-5 top">
          <ChevronDoubleUpIcon className="w-5 mx-auto text-white" />
          <p className="font-semibold mt-1 text-lg tracking-widest uppercase">back to top</p>
        </div>
        <div className="mt-5">
          <div className="flex flex-row gap-4 items-center justify-center">
            <a target="_blank" href="https://www.facebook.com/adam.megas"><img className="w-8" src={facebookIcon} alt="facebookIcon" /></a>
            <a target="_blank" href="https://ru.linkedin.com/in/adam-esmurzelly-469355280"><img className="w-8" src={linkedinIcon} alt="linkedinIcon" /></a>
            <a target="_blank" href="https://www.instagram.com/esmurzelly"><img className="w-8" src={instagramIcon} alt="instagramIcon" /></a>
            <a target="_blank" href="mailto:elephants54706@gmail.com"><img className="w-8" src={mailIcon} alt="mailIcon" /></a>
          </div>
          <p className="mt-6 text-lg font-medium">@2020 <span className="font-bold">Adam Esmurziev</span> All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
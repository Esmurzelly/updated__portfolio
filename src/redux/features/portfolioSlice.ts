import { createSlice } from '@reduxjs/toolkit';

import DictionaryAppImg from '../../assets/projects/DictionaryApp/main.png';
import BankCardCheckingImg from '../../assets/projects/Card Holder/main.png';
import CountriesListImg from '../../assets/projects/Country API/main.png';
import QRCodeImg from '../../assets/projects/QR/main.png';

import JobsFilteringImg from '../../assets/projects/Jobs_filter/main.png';
import PAMImg from '../../assets/projects/PAM/main.png';
import BlankoImg from '../../assets/projects/Blanko/main.png';
import FullPage3DImg from '../../assets/projects/3D Fullpage/main.png';

import GenerativeArtImg from '../../assets/projects/GenerativeArt/main.png';
import VideoPlayerImg from '../../assets/projects/Video player/main.png';
import WaterCompanyImg from '../../assets/projects/WaterCompany/main.png';
import DHLImg from '../../assets/projects/DHL/main.png';

import Cube3D from '../../assets/projects/Cube3D/main.png';
import ListDatabase from '../../assets/projects/React + PostgreSQL/main.png';
import PortfolioImg from '../../assets/projects/Portfolio/portfilio.png';
import FitnessImg from '../../assets/projects/Fitness/main.png';

import CoffeeHouseImg from '../../assets/projects/CoffeeHouse/coffeehouse.png';
import StpImg from '../../assets/projects/Stp/stpImg.png';

const initialState = {
  projects: [
    {
      id: 1,
      type: 'web_app',
      title: 'DictionaryApp',
      description: 'Let you to learn English words and phrases',
      mainUrl: DictionaryAppImg,
      live: 'https://dictionary--application.pages.dev/',
      code: 'https://github.com/Esmurzelly/dictionary__application',
      stack: [
        'ReactJS',
        'TypeScript',
        'TailwindCSS',
        'Redux Toolkit',
        'NodeJS',
        'Express',
      ],
    },
    {
      id: 2,
      type: 'web_app',
      title: 'Bank Card Checking',
      description: 'Check your bank card data using validation',
      mainUrl: BankCardCheckingImg,
      live: 'https://interactive-card-i2q5scoqj-esmurzelly.vercel.app/',
      code: 'https://github.com/Esmurzelly/interactive_card',
      stack: ['ReactJS', 'React Hook Form', 'styled-components', 'SCSS'],
    },
    {
      id: 3,
      type: 'web_app',
      title: 'Countries List',
      description:
        'This service provides you all exsisted countries and info about them',
      mainUrl: CountriesListImg,
      live: 'https://country-list-hyxk.vercel.app/',
      code: 'https://github.com/Esmurzelly/country__list',
      stack: ['ReactJS', 'TypeScript', 'TailwindCSS', 'React Router Dom'],
    },
    {
      id: 4,
      type: 'utility',
      title: 'QR Code generator',
      description:
        'Enter your link or any word and get it converted in QR Code',
      mainUrl: QRCodeImg,
      live: 'https://esmurzelly.github.io/qr_code/',
      code: 'https://github.com/Esmurzelly/qr_code',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 5,
      type: 'web_app',
      title: "Job's filtering",
      description: 'You have the list of jobs and may opportunity to filter it',
      mainUrl: JobsFilteringImg,
      live: 'https://joblisting-iic3rq5vq-esmurzelly.vercel.app/',
      code: 'https://github.com/Esmurzelly/JobListing',
      stack: ['ReactJS', 'SCSS'],
    },
    {
      id: 6,
      type: 'web_site',
      title: 'PAM consulting',
      description: 'Web site for relocation to Kyprus',
      mainUrl: PAMImg,
      live: 'https://esmurzelly.github.io/pam_consulting/',
      code: 'https://github.com/Esmurzelly/pam_consulting',
      stack: ['HTML', 'SCSS', 'JavaScript', 'SwiperJS'],
    },
    {
      id: 7,
      type: 'web_site',
      title: 'Blanko Landing',
      description: 'Fashion site portfolio',
      mainUrl: BlankoImg,
      live: 'https://esmurzelly.github.io/Blanko/',
      code: 'https://github.com/Esmurzelly/Blanko',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 8,
      type: 'utility',
      title: 'FullPage3D',
      description: 'Interactive site with 3D animation',
      mainUrl: FullPage3DImg,
      live: 'https://esmurzelly.github.io/FullPage3D/',
      code: 'https://github.com/Esmurzelly/FullPage3D',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 9,
      type: 'utility',
      title: 'Generative Art',
      description: 'Awesome infinity animation',
      mainUrl: GenerativeArtImg,
      live: 'https://esmurzelly.github.io/Generative-art/',
      code: 'https://github.com/Esmurzelly/Generative-art',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 10,
      type: 'utility',
      title: 'Video player',
      description: 'Video player with uploaded video',
      mainUrl: VideoPlayerImg,
      live: 'https://esmurzelly.github.io/video_player/',
      code: 'https://github.com/Esmurzelly/video_player',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 11,
      type: 'web_site',
      title: 'Water Company site',
      description: 'Site for "General Water Company"',
      mainUrl: WaterCompanyImg,
      live: 'https://esmurzelly.github.io/Water-Company/',
      code: 'https://github.com/Esmurzelly/Water-Company',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 12,
      type: 'web_site',
      title: 'DHL site',
      description: 'Multypage site for DHL with changing languages',
      mainUrl: DHLImg,
      live: 'https://esmurzelly.github.io/delivery/',
      code: 'https://github.com/Esmurzelly/delivery',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 13,
      type: 'utility',
      title: '3D Cube',
      description: 'Funny cube animation',
      mainUrl: Cube3D,
      live: 'https://esmurzelly.github.io/3D-Cube/',
      code: 'https://github.com/Esmurzelly/3D-Cube',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 14,
      type: 'web_app',
      title: 'List orders from database',
      description: 'React app using NodeJS, PostgreSQL and usual Excel file',
      mainUrl: ListDatabase,
      live: 'https://react-posgresql-2flv11w0o-esmurzelly.vercel.app/',
      code: 'https://github.com/Esmurzelly/react-posgresql',
      stack: ['ReactJS', 'NodeJS', 'Express', 'Bootstrap'],
    },
    {
      id: 15,
      type: 'web_app',
      title: 'Portfoilio',
      description:
        'My personal portfolio using ReactJS, NodeJS and Redux Toolkit',
      mainUrl: PortfolioImg,
      live: 'https://react-posgresql-2flv11w0o-esmurzelly.vercel.app/',
      code: 'https://github.com/Esmurzelly/react-posgresql',
      stack: ['ReactJS', 'NodeJS', 'Express', 'Bootstrap', 'Redux Toolkit'],
    },
    {
      id: 16,
      type: 'web_app',
      title: 'Fitness Application',
      description: 'Web application for fitness club',
      mainUrl: FitnessImg,
      live: 'https://fitness--application.pages.dev/',
      code: 'https://github.com/Esmurzelly/fitness__application',
      stack: ['ReactJS', 'Vite', 'TypeScript', 'TailwindCSS'],
    },
    {
      id: 17,
      type: 'web_site',
      title: 'CoffeeHouse Site',
      description: 'Web site for coffeehouse',
      mainUrl: CoffeeHouseImg,
      live: 'https://coffeehouse-five.vercel.app/',
      code: 'https://github.com/Esmurzelly/coffeehouse',
      stack: ['ReactJS', 'Vite', 'TypeScript', 'TailwindCSS'],
    },
    {
      id: 18,
      type: 'web_app',
      title: 'BeSafe Application',
      description:
        'The web application for tracking any criminal on the streets',
      mainUrl: StpImg,
      live: 'https://besafeapp.ru/',
      code: 'https://github.com/Esmurzelly/stp--application',
      stack: [
        'ReactJS',
        'NodeJS',
        'Express',
        'MongoDB',
        'TailwindCSS',
        'Redux Toolkit',
        'Leaflet',
      ],
    },
  ],
};

export const portfolioSlice = createSlice({
  name: 'portfolioSlice',
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;

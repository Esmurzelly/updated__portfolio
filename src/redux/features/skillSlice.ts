import { createSlice } from '@reduxjs/toolkit';

import logo_html from '../../assets/skills/html.svg';
import logo_css from '../../assets/skills/css.svg';
import logo_git from '../../assets/skills/git.svg';
import logo_js from '../../assets/skills/js.svg';
import logo_react from '../../assets/skills/react.svg';
import logo_redux from '../../assets/skills/redux.svg';
import logo_sass from '../../assets/skills/sass.svg';
import logo_tailwind from '../../assets/skills/tailwind.svg';
import logo_figma from '../../assets/skills/figma.svg';
import logo_typescript from '../../assets/skills/typescript.svg';
import logo_vite from '../../assets/skills/vite.svg';
import logo_mongodb from '../../assets/skills/mongodb.svg';
import logo_nodejs from '../../assets/skills/nodejs.svg';
import logo_docker from '../../assets/skills/docker.svg';
import logo_nextjs from '../../assets/skills/nextjs.svg';
import logo_english from '../../assets/skills/english.svg';
import logo_german from '../../assets/skills/german.svg';
import logo_korean from '../../assets/skills/korean.svg';
import { SkillsState } from '../../../types';

const initialState: SkillsState = {
  skills: [
    {
      id: 1,
      name: 'HTML',
      logo: logo_html,
      status: 'done'
    },
    {
      id: 2,
      name: 'CSS',
      logo: logo_css,
      status: 'done'
    },
    {
      id: 3,
      name: 'JS',
      logo: logo_js,
      status: 'done'
    },
    {
      id: 4,
      name: 'TS',
      logo: logo_typescript,
      status: 'done'
    },
    {
      id: 5,
      name: 'ReactJS',
      logo: logo_react,
      status: 'done'
    },
    {
      id: 6,
      name: 'Redux Toolkit',
      logo: logo_redux,
      status: 'done'
    },
    {
      id: 7,
      name: 'Vite',
      logo: logo_vite,
      status: 'done'
    },
    {
      id: 8,
      name: 'Docker',
      logo: logo_docker,
      status: 'learning'
    },
    {
      id: 9,
      name: 'SASS',
      logo: logo_sass,
      status: 'done'
    },
    {
      id: 10,
      name: 'Tailwind',
      logo: logo_tailwind,
      status: 'done'
    },
    {
      id: 11,
      name: 'GIT',
      logo: logo_git,
      status: 'done'
    },
    {
      id: 12,
      name: 'Figma',
      logo: logo_figma,
      status: 'done'
    },
    {
      id: 13,
      name: 'NodeJS',
      logo: logo_nodejs,
      status: 'learning'
    },
    {
      id: 14,
      name: 'MongoDB',
      logo: logo_mongodb,
      status: 'done'
    },
    {
      id: 15,
      name: 'English B2',
      logo: logo_english,
      status: 'other'
    },
    {
      id: 16,
      name: 'Deutsch A2',
      logo: logo_german,
      status: 'other'
    },
    {
      id: 17,
      name: '한국인 A1',
      logo: logo_korean,
      status: 'other'
    },    
    {
      id: 18,
      name: 'NextJS',
      logo: logo_nextjs,
      status: 'learning'
    },
  ],
};

export const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = skillSlice.actions

export default skillSlice.reducer;

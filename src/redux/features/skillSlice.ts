import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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

// export interface CounterState {
//   value: number
// }

const initialState = {
  skills: [
    {
      id: 1,
      name: 'logo_html',
      logo: logo_html,
    },
    {
      id: 2,
      name: 'logo_css',
      logo: logo_css,
    },
    {
      id: 3,
      name: 'logo_js',
      logo: logo_js,
    },
    {
      id: 4,
      name: 'logo_typescript',
      logo: logo_typescript,
    },
    {
      id: 5,
      name: 'logo_react',
      logo: logo_react,
    },
    {
      id: 6,
      name: 'logo_redux',
      logo: logo_redux,
    },
    {
      id: 7,
      name: 'logo_vite',
      logo: logo_vite,
    },
    {
      id: 8,
      name: 'logo_docker',
      logo: logo_docker,
    },
    {
      id: 9,
      name: 'logo_sass',
      logo: logo_sass,
    },
    {
      id: 10,
      name: 'logo_tailwind',
      logo: logo_tailwind,
    },
    {
      id: 11,
      name: 'logo_git',
      logo: logo_git,
    },
    {
      id: 12,
      name: 'logo_figma',
      logo: logo_figma,
    },
    {
      id: 13,
      name: 'logo_nodejs',
      logo: logo_nodejs,
    },
    {
      id: 14,
      name: 'logo_mongodb',
      logo: logo_mongodb,
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

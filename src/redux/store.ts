import { configureStore } from '@reduxjs/toolkit';
import skillReducer from './features/skillSlice'
import portfolioReducer from './features/portfolioSlice'

export const store = configureStore({
  reducer: {
    skills: skillReducer,
    portfolio: portfolioReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
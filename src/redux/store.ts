import { configureStore } from '@reduxjs/toolkit';
import skillReducer from './features/skillSlice'
import portfolioReducer from './features/portfolioSlice'

export const store = configureStore({
  reducer: {
    skills: skillReducer,
    portfolio: portfolioReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
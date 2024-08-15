import { configureStore } from '@reduxjs/toolkit';
import {postsReducers} from '../features/guestPosts/postsSlice';


export const store = configureStore({
  reducer: {
    posts:postsReducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

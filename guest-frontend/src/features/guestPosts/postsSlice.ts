import {createSlice} from '@reduxjs/toolkit';
import {Post} from '../../types';

export interface PostsState {
  items: Post[];
  itemsFetching: boolean;
  isCreating: boolean;
}

const initialState: PostsState = {
  items: [],
  itemsFetching: false,
  isCreating: false,
};


export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: () => {
  },
  selectors: {}
});

export const postsReducers = postsSlice.reducer;

export const {

} = postsSlice.selectors;
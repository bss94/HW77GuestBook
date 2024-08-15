import {createSlice} from '@reduxjs/toolkit';
import {Post} from '../../types';
import {createPost, fetchPosts} from './postsThunks';

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
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.itemsFetching = true;
    })
      .addCase(fetchPosts.fulfilled, (state, {payload: items}) => {
        state.itemsFetching = false;
        state.items = items;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.itemsFetching = false;
      });
    builder.addCase(createPost.pending, (state) => {
      state.isCreating = true;
    })
      .addCase(createPost.fulfilled, (state) => {
        state.isCreating = false;
      })
      .addCase(createPost.rejected, (state) => {
        state.isCreating = false;
      });

  },
  selectors: {
    selectPosts:(state)=>state.items,
    selectFetching:(state)=>state.itemsFetching,
    selectCreating:(state)=>state.isCreating,
  }
});

export const postsReducers = postsSlice.reducer;

export const {
  selectPosts,
  selectFetching,
  selectCreating
} = postsSlice.selectors;
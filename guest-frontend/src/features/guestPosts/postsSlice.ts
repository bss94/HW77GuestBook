import {createSlice} from '@reduxjs/toolkit';
import {Post} from '../../types';
import {createPost, fetchPosts} from './postsThunks';

export interface PostsState {
  items: Post[];
  itemsFetching: boolean;
  isCreating: boolean;
  showModal: boolean;
}

const initialState: PostsState = {
  items: [],
  itemsFetching: false,
  isCreating: false,
  showModal: false
};


export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
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
        state.showModal = false;
      })
      .addCase(createPost.rejected, (state) => {
        state.isCreating = false;
        state.showModal = false;
      });
  },
  selectors: {
    selectPosts: (state) => state.items,
    selectFetching: (state) => state.itemsFetching,
    selectCreating: (state) => state.isCreating,
    selectShowModal: (state) => state.showModal,
  }
});

export const postsReducers = postsSlice.reducer;

export const {
  openModal,
  closeModal
} = postsSlice.actions;

export const {
  selectPosts,
  selectFetching,
  selectCreating,
  selectShowModal
} = postsSlice.selectors;
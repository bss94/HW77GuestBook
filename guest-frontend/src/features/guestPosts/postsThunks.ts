import {Post, PostMutation} from '../../types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';


export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  async () => {
    const {data: posts} = await axiosApi.get<Post[]>('/posts');
    return posts;
  });

export const createPost = createAsyncThunk<void, PostMutation>(
  'posts/createPosts', async (postMutation) => {
    const formData = new FormData();
    if (postMutation.author.trim() !== '') {
      formData.append('author', postMutation.author);
    }
    formData.append('message', postMutation.message.trim());
    if (postMutation.image) {
      formData.append('image', postMutation.image);
    }
    await axiosApi.post('/posts', formData);
  });
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from '../../api/socialApi';

export interface SocialState {
  posts: object[],
  loading: boolean,
  errors: string
}

const initialState: SocialState = {
  posts: [],
  loading: false,
  errors: '',
};

export const getPosts = createAsyncThunk('social/posts/getPosts', async () => {
  const { response } = await fetchPosts();

  return response.data;
});

const postsSlice = createSlice({
  name: 'social/posts',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getPosts.pending.toString()]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled.toString()]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [getPosts.rejected.toString()]: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

export default postsSlice.reducer;

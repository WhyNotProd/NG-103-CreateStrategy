import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchPosts, createPost, likeUserPost, unlikeUserPost,
} from '../../api/socialApi';

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

export const loadPosts = createAsyncThunk('social/posts/getPosts', async () => {
  const { response } = await fetchPosts();
  return response.data;
});

export const postsSlice = createSlice({
  name: 'social/posts',
  initialState,
  reducers: {
    /* Test functions */
    likePostR(state: SocialState) {
      const testPostKey: number = 0;
      const testUserName: string = 'Vikhyat Puri';
      state.posts[0][testPostKey].userLike.push(testUserName);
    },
    unlikePostR(state: SocialState) {
      const testPostKey: number = 0;
      const testUserName: string = 'Vikhyat Puri';
      const arrIndex = state.posts[0][testPostKey].userLike.indexOf(testUserName);
      state.posts[0][testPostKey].userLike.splice(arrIndex, 1);
    },
  },
  extraReducers: {
    [loadPosts.pending.toString()]: (state) => {
      state.loading = true;
    },
    [loadPosts.fulfilled.toString()]: (state, { payload }) => {
      state.posts.push(payload);
      state.loading = false;
    },
    [loadPosts.rejected.toString()]: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});
export default postsSlice.reducer;

export const { likePostR, unlikePostR } = postsSlice.actions;

export const addPost = createAsyncThunk('social/posts/addPost', async (data: object) => {
  await createPost(data);
});

export const likePost = createAsyncThunk('social/posts/likePost', async (shareId: number) => {
  await likeUserPost(1, shareId);
});

export const unlikePost = createAsyncThunk('social/posts/unlikePost', async (shareId: number) => {
  await unlikeUserPost(1, shareId);
});

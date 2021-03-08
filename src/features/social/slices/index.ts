import { combineReducers } from 'redux';
import postsSliceReducer from '../socialPostsSlice';

const rootReducer = combineReducers({
  posts: postsSliceReducer,
});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

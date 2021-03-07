import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import userReducer from '../auth/userSlice';
import socialPostsReducer from '../features/social/socialPostsSlice';
import heatMapReducer from '../features/heatmap/heatMapSlice';
import trendReducer from '../features/trends/trendSlice';
import assetReducer from '../features/strategy/assetSlice';
import strategyReducer from '../features/strategy/strategySlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  social: socialPostsReducer,
  heatmap: heatMapReducer,
  trend: trendReducer,
  asset: assetReducer,
  strategy: strategyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

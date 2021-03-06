import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  // if (import.meta.env.NODE_ENV === 'development') {
  // 	const { logger } = require(`redux-logger`);

  // 	return getDefaultMiddleware().concat(logger);
  // }

		 getDefaultMiddleware(),
  devTools: import.meta.env.NODE_ENV === 'development',
});

// if (import.meta.env.NODE_ENV === 'development' && module.hot) {
// 	module.hot.accept('./rootReducer', () => {
// 		const newRootReducer = require('./rootReducer').default;
// 		store.replaceReducer(newRootReducer.createReducer());
// 	});
// }

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

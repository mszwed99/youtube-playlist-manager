import { configureStore, Action } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from './modules/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

export default store;

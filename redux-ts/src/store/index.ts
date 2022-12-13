import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const rootReducer = {};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

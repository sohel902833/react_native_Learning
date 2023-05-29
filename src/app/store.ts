import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from '../feature/api/apiSlice';
import authSlice from '../feature/auth/authSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  devTools: true,
  middleware: getdefauldMiddleware =>
    getdefauldMiddleware().concat(apiSlice.middleware),
});

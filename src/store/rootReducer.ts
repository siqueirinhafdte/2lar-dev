import { combineReducers } from '@reduxjs/toolkit';
import loadingReducer from 'store/slices/loading';
import snackbarReducer from 'store/slices/snackbar';
import userReducer from 'store/slices/user';

export const combinedReducers = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  snackbar: snackbarReducer
});

export default combinedReducers;

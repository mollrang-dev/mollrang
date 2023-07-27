import {HYDRATE} from 'next-redux-wrapper';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  isLogin: boolean;
}

const initialState: AuthState = {
  isLogin: false
};
export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setLogin(state: AuthState, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    }
  },
});

export const {setLogin} = AuthSlice.actions;

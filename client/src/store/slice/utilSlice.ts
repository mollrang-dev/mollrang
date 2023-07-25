import {HYDRATE} from 'next-redux-wrapper';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type for our state
export interface UtilState {
  sideBarIsOpen: boolean;
}

// Initial state
const initialState: UtilState = {
  sideBarIsOpen: false
};
// Actual Slice
export const UtilSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    // Action to set the authentication status
    setSideBarIsOpen(state: UtilState, action: PayloadAction<boolean>) {
      state.sideBarIsOpen = action.payload;
    }
  },

  /** 페이지 이동 시 상태 초기화가 필요한 경우 추가해야 함 */
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state
  //       // ...action.payload.auth
  //     };
  //   }
  // }
});

export const {setSideBarIsOpen} = UtilSlice.actions;
export default UtilSlice;

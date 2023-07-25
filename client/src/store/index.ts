import {
  combineReducers,
  configureStore,
  PayloadAction,
  ThunkAction,
  Action
} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import logger from 'redux-logger';
import {AuthSlice, authSlice} from "@store/slice/authSlice";

const debugOn = process.env.NODE_ENV === 'development';

const reducer = (state: RootState, action: PayloadAction<RootAction>) => {
  return combineReducers({
    [authSlice.name]: authSlice.reducer
  })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  });

const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: debugOn
});

type RootAction = ReturnType<AuthSlice>
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action>;

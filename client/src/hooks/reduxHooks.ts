import {useDispatch, useSelector} from "react-redux"
import {Dispatch, Action} from 'redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from '@store/index';

type ActionCreator<T> = (...args: any[]) => T
type CustomDispatch<T> = (actionCreator: ActionCreator<T>, ...args: any[]) => void

export const useAppDispatch: AppDispatch = <T extends Action<any>>(): CustomDispatch<T> => {
  const dispatch = useDispatch<Dispatch<T>>();

  const customDispatch: CustomDispatch<T> = (actionCreator, ...args) => {
    const action = actionCreator(...args)
    dispatch(action)
  }
  return customDispatch
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

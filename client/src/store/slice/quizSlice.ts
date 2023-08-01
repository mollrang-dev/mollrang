import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface QuizState {
  currentStep: number;
}

const initialState: QuizState = {
  currentStep: 1,
}

export const QuizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentStep(state: QuizState, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    }
  }
});

export const {setCurrentStep} = QuizSlice.actions;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface QuizState {
  currentStep: number;
}

const initialState: QuizState = {
  currentStep: 1,
};

export const QuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCurrentStep(state: QuizState, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.quiz,
        };
      },
    },
  },
});

export const { setCurrentStep } = QuizSlice.actions;

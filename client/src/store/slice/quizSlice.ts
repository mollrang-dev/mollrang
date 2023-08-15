import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { quizAnswerSubmit } from "@store/thunk/quizThunk";
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(quizAnswerSubmit.fulfilled, (state, action) => {
        // state = { ...state, someProperty: action.payload };
      })
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action,
        };
      });
  },
});

export const { setCurrentStep } = QuizSlice.actions;

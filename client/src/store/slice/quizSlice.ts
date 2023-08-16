import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { quizAnswerSubmit } from "@store/thunk/quizThunk";
import { HYDRATE } from "next-redux-wrapper";

export interface QuizState {
  currentStep: number;
  hasResult: boolean;
}

const initialState: QuizState = {
  currentStep: 1,
  hasResult: false,
};

export const QuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCurrentStep(state: QuizState, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    setHasResult(state: QuizState, action: PayloadAction<boolean>) {
      state.hasResult = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(quizAnswerSubmit.fulfilled, (state, action) => {
        // api 호출 성공 시  다음 단계로 이동
        // state.currentStep += 1;
        state.hasResult = true;
      })
      .addCase(quizAnswerSubmit.rejected, (state, action) => {
        // 실패 시 초기화
        state.currentStep = 1;
        state.hasResult = false;
      })
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action,
        };
      });
  },
});

export const { setCurrentStep, setHasResult } = QuizSlice.actions;

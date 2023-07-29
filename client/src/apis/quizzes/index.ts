import { axiosInstance } from "@libs/axios";

/*
  @description: 퀴즈 리스트 불러오기 (5 개, 10 개 의 문제)
*/
export const getQuizLists = async (size: number) => {
  try {
    const { data } = await axiosInstance.get(`/quizzes?size=${size}`);
    return data;
  } catch (e) {
    throw e;
  }
};

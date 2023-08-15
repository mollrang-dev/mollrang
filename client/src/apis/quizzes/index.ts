import { axiosInstance } from "@libs/axios";

/**
 * ==============================
 * @description: Method GET
 * ==============================
 */

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

/*
  @description: 유저가 맞춘 퀴즈 개수
*/
export const findManyCorrectQuizCount = async ({
  userId,
  limit,
  currentPage,
}: {
  userId: string;
  limit: number;
  currentPage: number;
}) => {
  try {
    const { data } = await axiosInstance.get(`/quizzes/correct/${userId}`, {
      params: {
        limit,
        currentPage,
      },
    });
  } catch (e) {
    throw e;
  }
};

/*
  @description: 유저가 틀린 퀴즈 개수
*/
export const findManyIncorrectQuizCount = async ({
  userId,
  limit,
  currentPage,
}: {
  userId: string;
  limit: number;
  currentPage: number;
}) => {
  try {
    const { data } = await axiosInstance.get(`/quizzes/incorrect/${userId}`, {
      params: {
        limit,
        currentPage,
      },
    });
  } catch (e) {
    throw e;
  }
};

/*
  @description: 퀴즈 단일 조회
*/
export const findOneQuizByQuizId = async ({
  id,
  quizId,
}: {
  id: string;
  quizId: string;
}) => {
  try {
    const { data } = await axiosInstance.get(`/quizzes/${quizId}`);
  } catch (e) {
    throw e;
  }
};

/**
 * ==============================
 * @description: Method POST
 * ==============================
 */

/**
 * @description: 퀴즈 즐겨찾기
 * @param {type: string} quizId
 */
export const updateFavoriteQuizList = async (quizId: string) => {
  try {
    const { data } = await axiosInstance.post(`/quizzes/${quizId}/favorite`);
  } catch (e) {
    throw e;
  }
};

/**
 * @description: 유저 정답 제출
 * @param quizId
 */
export const insertQuizAnswer = async (quizId: string) => {
  try {
    const { data } = await axiosInstance.post(`/quizzes/${quizId}/answer`);
    return data;
  } catch (e) {
    throw e;
  }
};

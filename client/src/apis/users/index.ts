import { axiosInstance } from "@libs/axios";

/**
 * ==============================
 * @description: Method POST
 * ==============================
 */

/**
 * @description: SNS 로그인
 */
export const socialSignIn = async () => {
  try {
    const {data} = await axiosInstance.post('/user/sign-in/sns');
  } catch (e) {
    throw e;
  }
}

/**
 * @description: SNS 회원가입
 */
export const socialSignUp = async () => {
  try {
    const {data} = await axiosInstance.post('/user/sign-up/sns');
  } catch (e) {
    throw e;
  }
}

/**
 * @description: SNS 회원탈퇴
 */
export const socialWithdrawal = async () => {
  try {
    const {data} = await axiosInstance.post('/user/withdrawal/sns');
  } catch (e) {
    throw e;
  }
}

/**
 * @description: 닉네임 중복 검사
 */
export const findOneUserNickname = async () => {
  try {
    const {data} = await axiosInstance.post('/user/verify/nickname');
  } catch (e) {
    throw e;
  }
}

/**
 * @description: 토근 검사
 */
export const tokenVerify = async () => {
  try {
    const {data} = await axiosInstance.post('/user/verify/token');
  } catch (e) {
    throw e;
  }
}


/**
 * ==============================
 * @description: Method PATHCH
 * ==============================
 */

/**
 * @description: 사용자 정보 수정
 * 
 * header token
 */
export const updateOneUser = async () => {
  try {
    const {data} = await axiosInstance.patch('/user');
  } catch (e) {
    throw e;
  }
}

/**
 * ==============================
 * @description: Method GET
 * ==============================
 */

/**
 * @description: 사용자 정보 조회
 */
export const findOneUser = async () => {
  try {
    const {data} = await axiosInstance.get('/user');
  } catch (e) {
    throw e;
  }
}
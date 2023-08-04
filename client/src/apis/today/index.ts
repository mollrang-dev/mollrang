import {axiosInstance} from "@libs/axios";

export const getTodayHumor = async () => {
  try {
    const {data} = await axiosInstance.get('/today/humor');
    return data;
  } catch (e) {
    throw e;
  }
}
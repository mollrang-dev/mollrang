import {IS_PRODUCTION} from "@constants/config";

export const isProduction = (): boolean => {
  return process.env.NEXT_PUBLIC_IS_PRODUCTION === IS_PRODUCTION;
}
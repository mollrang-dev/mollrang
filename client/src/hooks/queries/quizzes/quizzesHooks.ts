import { getQuizLists } from "@apis/quizzes";
import { QUERY_KEYS } from "@constants/queries/keys";
import { queryClient } from "@libs/tanstack";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useQuizListsQuery = async (size: number) => {
  // useEffect(() => {
  //   queryClient.prefetchQuery({
  //     queryKey: [QUERY_KEYS.QUIZ.LIST, size],
  //     queryFn: () => getQuizLists(size),
  //   });
  // }, [size]);

  

  const { data = [] } = await useQuery({
    queryKey: [QUERY_KEYS.QUIZ.LIST, size],
    queryFn: () => getQuizLists(size),
  });
  console.log('query', data)
  return data;
};

import {getQuizLists} from "@apis/quizzes";
import {QUERY_KEYS} from "@constants/queries/keys";
import {useQuery} from "@tanstack/react-query";

export const useQuizListsQuery = async (size: number) => {

  return useQuery({
    queryKey: [QUERY_KEYS.QUIZ.LIST, size],
    queryFn: () => getQuizLists(size),
  });
};

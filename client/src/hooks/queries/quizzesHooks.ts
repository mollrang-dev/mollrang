import { getQuizLists } from "@apis/quizzes";
import { QUERY_KEYS } from "@constants/queries/keys";
import { useQuery } from "@tanstack/react-query";

export const useQuizListsQuery = async (size: number) => {
  const result = useQuery({
    queryKey: [QUERY_KEYS.QUIZ.LIST, size],
    queryFn: () => getQuizLists(size),
  });
  return result;
};

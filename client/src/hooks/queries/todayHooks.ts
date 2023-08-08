import { QUERY_KEYS } from "@constants/queries/keys";
import { useQuery } from "@tanstack/react-query";
import { getTodayHumor } from "@apis/today";
import { HumorList } from "@components/today/humor/Humor";

export const useQueryTodayHumorLists = () => {
  const result = useQuery({
    queryKey: [QUERY_KEYS.TODAY.HUMOR_LIST],
    queryFn: () => getTodayHumor(),
  });
  const { data } = result;
  return result;
};

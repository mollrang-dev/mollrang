import {QUERY_KEYS} from "@constants/queries/keys";
import {useQuery} from "@tanstack/react-query";
import {getTodayHumor} from "@apis/today";
import {HumorList} from "@components/today/humor/Humor";

export const useQueryTodayHumorLists = async (): Promise<HumorList> => {
  const {data} = await useQuery({
    queryKey: [QUERY_KEYS.TODAY.HUMOR_LIST],
    queryFn: () => getTodayHumor(),
  });
  return data;
};

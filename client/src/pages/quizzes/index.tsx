import {getQuizLists} from "@apis/quizzes";
import {QUERY_KEYS} from "@constants/queries/keys";
import {useQuizListsQuery} from "@hooks/queries/quizzes/quizzesHooks";
import {queryClient} from "@libs/tanstack";
import {dehydrate, useQuery} from "@tanstack/react-query";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import {GetServerSideProps} from "next";
import React, {ReactElement} from "react";

interface Quiz {
  quizId: string;
  question: string;
  answer: string;
  description: string;
}

interface Props {
  size: number;
}

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      const {size} = ctx.query as { size: string };
      await queryClient.prefetchQuery([QUERY_KEYS.QUIZ.LIST, size], () =>
        getQuizLists(Number(size)),
      );
      return {
        props: {
          dehydratedState: dehydrate(queryClient),
          size,
        },
      };
    } catch (e) {
      return {
        props: {}
      }
    }
  },
);

const PlayQuizPage: React.FC<Props> = (props): ReactElement => {
  const {size} = props;
  const {data} = useQuery([QUERY_KEYS.QUIZ.LIST, size], () =>
    getQuizLists(size),
  );

  return (
    <div>
      {data &&
      data.map((value: Quiz) => {
        return <div key={value.quizId}>{value.question}</div>;
      })}
    </div>
  );
};
export default PlayQuizPage;

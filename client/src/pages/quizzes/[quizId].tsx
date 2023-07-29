import React, { ReactElement } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Timer } from "@components/utils/timer/Timer";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import { ButtonGroup } from "@components/domain/quizzes/button-group/ButtonGroup";
import { QuestionForm } from "@components/domain/quizzes/question-form/QuestionForm";
import styles from "@styles/pages/QuizPage.module.scss";

interface Props {
  quizData: InferGetServerSidePropsType<GetServerSideProps>;
  quizId: string;
}

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    const { quizId } = ctx.query as { quizId: string };
    //TODO 쿼즈 리스트 담아서 전달
    return {
      props: {
        quizData: [],
        quizId,
      },
    };
  },
);

const QuizPage: React.FC<Props> = (props): ReactElement => {
  const { quizData, quizId } = props;
  return (
    <div className={styles.quiz_page}>
      <div className={styles.quiz_page_container}>
        <Timer time={60} />
        <QuestionForm />
        <ButtonGroup />
      </div>
    </div>
  );
};

export default QuizPage;

import {getQuizLists} from "@apis/quizzes";
import {QUERY_KEYS} from "@constants/queries/keys";
import {queryClient} from "@libs/tanstack";
import {dehydrate} from "@tanstack/react-query";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import {GetServerSideProps} from "next";
import React, {ReactElement, useEffect} from "react";
import {QuestionForm} from "@components/quizzes/question-form/QuestionForm";
import {Quiz} from "@interfaces/quiz";
import {Timer} from "@components/utils/timer/Timer";
import {ButtonGroup} from "@components/quizzes/button/ox/ButtonGroup";
import styles from "@styles/pages/QuizPage.module.scss";
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "@hooks/reduxHooks";
import {setCurrentStep, setEndOfQuiz, setTimer} from "@store/slice/quizSlice";
import {useRouter} from "next/router";
import {QuizCompleted} from "@components/quizzes/QuizCompleted";
import {QuizResult} from "@components/quizzes/result/QuizResult";
import {useQuizListsQuery} from "@hooks/queries/quizzesHooks";

interface Props {
  size: number;
}

const PlayQuizPage: React.FC<Props> = (props): ReactElement => {
  const dispatch = useAppDispatch();
  const {size} = props;
  const {data = []} = useQuizListsQuery(size);
  const {currentStep, hasResult, timer, endOfQuiz} = useAppSelector(
    (state) => state.quiz,
  );

  const router = useRouter();

  useEffect(() => {
    resetQuizData();
  }, [router]);

  //TODO: 다른 방법 찾아보기
  // router 이동 시에 Redux Quiz Data 초기화 필요
  const resetQuizData = () => {
    dispatch(setEndOfQuiz(false));
    dispatch(setTimer(60));
    dispatch(setCurrentStep(1));
  };

  return (
    <div className={styles.quiz_page}>
      {!endOfQuiz ? (
        <div className={styles.quiz_page_container}>
          {!hasResult && <Timer time={timer}/>}
          {data.map((value: Quiz.ListInformation, index: number) => {
            return (
              <div
                key={value.quizId}
                className={classNames(
                  styles.quiz_form_container,
                  index + 1 === currentStep && styles.quiz_show,
                  styles.quiz_form,
                )}
              >
                <QuestionForm questionNumber={index + 1} quizLists={value}/>
                {hasResult ? (
                  <QuizResult description={value.description}/>
                ) : (
                  <ButtonGroup quizId={value.quizId}/>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <QuizCompleted/>
      )}
    </div>
  );
};
export default PlayQuizPage;

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      let {size} = ctx.query as { size: string };
      if (!size) size = "5";
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
        props: {},
      };
    }
  },
);

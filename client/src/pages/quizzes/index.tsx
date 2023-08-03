import {getQuizLists} from "@apis/quizzes";
import {QUERY_KEYS} from "@constants/queries/keys";
import {queryClient} from "@libs/tanstack";
import {dehydrate, useQuery} from "@tanstack/react-query";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import {GetServerSideProps} from "next";
import React, {ReactElement, useEffect} from "react";
import {QuestionForm} from "@components/domains/quizzes/question-form/QuestionForm";
import {Quiz} from "@interfaces/quiz";
import {Timer} from "@components/utils/timer/Timer";
import {ButtonGroup} from "@components/domains/quizzes/button/ox/ButtonGroup";
import styles from "@styles/pages/QuizPage.module.scss";
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "@hooks/reduxHooks";
import {setCurrentStep} from "@store/slice/quizSlice";
import {useRouter} from "next/router";
import {QuizCompleted} from "@components/domains/quizzes/QuizCompleted";

interface Props {
  size: number;
}

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      let {size} = ctx.query as { size: string };
      if (!size) size = 5
      await queryClient.prefetchQuery([QUERY_KEYS.QUIZ.LIST, size], () =>
        getQuizLists(Number(size)),
      );
      return {
        props: {
          dehydratedState: dehydrate(queryClient),
          size: size,
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
  // Redux 로 교체
  const dispatch = useAppDispatch();
  const {currentStep} = useAppSelector((state) => state.quiz);
  const {size} = props;
  const {data} = useQuery([QUERY_KEYS.QUIZ.LIST, size], () =>
    getQuizLists(size),
  );

  const router = useRouter();

  useEffect(() => {
    resetQuizData();
  }, [router])
  //TODO: 다른 방법 찾아보기
  // router 이동 시에 Redux Quiz Data 초기화 필요
  const resetQuizData = () => {
    dispatch(setCurrentStep(1));
  }

  return (
    <div className={styles.quiz_page}>
      {currentStep <= size && (
        <div className={styles.quiz_page_container}>
          <Timer time={60}/>
          {
            data &&
            data.map((value: Quiz.ListInformation, index) => {
              return (
                <div key={value.quizId}
                     className={classNames(index + 1 === currentStep && styles.quiz_show, styles.quiz_form)}>
                  <QuestionForm questionNumber={index + 1} quizLists={value}/>
                </div>
              )
            })
          }
          <ButtonGroup/>
        </div>
      )}
      {currentStep > size && (<QuizCompleted/>)}
    </div>
  );
};
export default PlayQuizPage;

import { ReactElement } from "react";
import styles from "./QuizResult.module.scss";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setCurrentStep, setHasResult } from "@store/slice/quizSlice";
import { Button } from "@components/common/button/Button";
import { Typography } from "@components/common/typography/Typography";

interface Props {
  description: string;
}

export const QuizResult = (props: Props): ReactElement => {
  const { description } = props;
  const { currentStep } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  const onClickHandlerNextQuestion = (): void => {
    dispatch(setCurrentStep(currentStep + 1));
    dispatch(setHasResult(false));
  };

  const onClickHandlerQuizEnd = (): void => {
    console.log("퀴즈 종료");
  };
  return (
    <div className={styles.quiz_result}>
      <div>
        <Typography color="primary" weight="bold">
          정답입니다.
        </Typography>
        <Typography color="red" weight="bold">
          정답은 O 입니다.
        </Typography>
      </div>
      <div>
        <Typography color="gray750" weight="bold">
          해설 보기
        </Typography>

        <div className={styles.quiz_description}>{description}</div>
      </div>

      <div>
        <Button variant="primary-outline" onClick={onClickHandlerQuizEnd}>
          <Typography color="primary">다음 문제</Typography>
        </Button>
        <Button onClick={onClickHandlerNextQuestion}>
          <Typography color="white">다음 문제</Typography>
        </Button>
      </div>
    </div>
  );
};

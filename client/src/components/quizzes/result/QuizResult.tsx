import {ReactElement, useState} from "react";
import styles from "./QuizResult.module.scss";
import {useAppDispatch, useAppSelector} from "@hooks/reduxHooks";
import {setCurrentStep, setHasResult} from "@store/slice/quizSlice";
import {Button} from "@components/common/Button";
import {Typography} from "@components/common/Typography";
import classNames from "classnames";
import {useRouter} from "next/router";

interface Props {
  description: string;
}

export const QuizResult = (props: Props): ReactElement => {
  const {description} = props;
  const {currentStep} = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const router = useRouter();

  const onClickHandlerNextQuestion = (): void => {
    dispatch(setCurrentStep(currentStep + 1));
    dispatch(setHasResult(false));
  };

  const onClickHandlerQuizEnd = (): void => {
    router.replace("/");
  };
  return (
    <div className={styles.quiz_result}>
      <div className={classNames("text-center")}>
        <Typography color="primary" weight="bold">
          정답입니다.
        </Typography>
        <Typography color="red" weight="bold">
          정답은 O 입니다.
        </Typography>
      </div>
      <div>
        <Button
          variant="icon"
          onClick={() => setShowDescription(!showDescription)}
        >
          <Typography color="gray750" weight="bold">
            해설 보기
          </Typography>
        </Button>

        {showDescription && (
          <div className={styles.quiz_description}>{description}</div>
        )}
      </div>

      <div className={classNames("text-center")}>
        <Button variant="primary-outline" onClick={onClickHandlerQuizEnd}>
          <Typography color="primary">퀴즈 종료</Typography>
        </Button>
        <Button onClick={onClickHandlerNextQuestion}>
          <Typography color="white">다음 문제</Typography>
        </Button>
      </div>
    </div>
  );
};

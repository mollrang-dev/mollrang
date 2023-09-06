import styles from "@components/quizzes/button/play/QuizButton.module.scss";
import {Icon} from "@components/common/icon/Icon";
import {Typography} from "@components/common/Typography";
import {Button} from "@components/common/Button";
import React, {ReactElement, useState} from "react";
import {signIn, useSession} from "next-auth/react";
import {SelectedQuiz} from "@components/quizzes/selected-quiz/SelectedQuiz";
import {CustomModal} from "@components/common/modal/CustomModal";

export const PlayQuizButton = (): ReactElement => {
  const {data: session} = useSession();
  const [selectQuiz, setSelectQuiz] = useState<boolean>(false);

  const onClickHandlerPlayQuiz = async () => {
    if (session) setSelectQuiz(true);
    else await signIn("github");
  };

  const close = () => {
    setSelectQuiz(!selectQuiz);
  };

  return (
    <>
      <Button
        className={styles.play_quiz_button}
        variant={"primary-rounded"}
        onClick={onClickHandlerPlayQuiz}
        icon={
          <Icon className="flex" type={"open-book"} width={20} height={20}/>
        }
        aria-label={"퀴즈 풀기"}
      >
        <Typography
          className={"ml-8"}
          color={"white"}
          variant={"body2"}
          weight={"bold"}
          aria-hidden="true"
        >
          퀴즈 풀기
        </Typography>
      </Button>

      <CustomModal isOpen={selectQuiz} onRequestClose={close}>
        <SelectedQuiz/>
      </CustomModal>
    </>
  );
};

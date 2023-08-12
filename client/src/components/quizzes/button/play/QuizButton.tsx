import styles from "@components/quizzes/button/play/QuizButton.module.scss";
import { Icon } from "@components/common/icon/Icon";
import { Typography } from "@components/common/typography/Typography";
import { Button } from "@components/common/button/Button";
import React, { ReactElement, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { SelectedQuiz } from "@components/quizzes/selected-quiz/SelectedQuiz";
import { Modal } from "@components/common/modal/Modal";

export const PlayQuizButton = (): ReactElement => {
  const { data: session } = useSession();
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
          <Icon className="flex" type={"open-book"} width={20} height={20} />
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

      <Modal isOpen={selectQuiz} onRequestClose={close}>
        <SelectedQuiz />
      </Modal>
    </>
  );
};

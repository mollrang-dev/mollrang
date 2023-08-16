import { OXButton } from "@components/ui/OXButton/OXButton";
import React, { ReactElement } from "react";
import styles from "./ButtonGroup.module.scss";
import { useAppDispatch } from "@hooks/reduxHooks";
import { quizAnswerSubmit } from "@store/thunk/quizThunk";

interface Props {
  quizId: string;
}

export const ButtonGroup = (props: Props): ReactElement => {
  const { quizId } = props;

  const dispatch = useAppDispatch();

  const onClickQuizAnswer = async (answer: string) => {
    const body = {
      quizId,
      answer,
    };
    dispatch(quizAnswerSubmit(quizId));
  };

  return (
    <div className={styles.ox_button_group}>
      <OXButton variant={"O"} onClick={() => onClickQuizAnswer("o")} />
      <OXButton variant={"X"} onClick={() => onClickQuizAnswer("x")} />
    </div>
  );
};

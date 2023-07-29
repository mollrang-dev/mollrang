import { Typography } from "@components/common/typography/Typography";
import { ReactElement } from "react";
import styels from "./SelectedQuiz.module.scss";
import { useRouter } from "next/router";

export const SelectedQuiz = (): ReactElement => {
  const router = useRouter();
  const onClickHandlerQuizType = async (size: number) => {
    await router.push(`/quizzes?size=${size}`);
  };

  return (
    <div className={styels.selected_quiz_container}>
      <div className={styels.selected_quiz_body}>
        <Typography>퀴즈 고르기</Typography>
        <button type="button" onClick={() => onClickHandlerQuizType(5)}>
          5 문제
        </button>
        <button type="button" onClick={() => onClickHandlerQuizType(10)}>
          10 문제
        </button>
      </div>
    </div>
  );
};

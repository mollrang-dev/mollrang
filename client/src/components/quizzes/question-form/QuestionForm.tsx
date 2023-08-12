import { FormUi } from "@components/ui/form/FormUi";
import { ReactElement } from "react";
import styles from "./QuestionForm.module.scss";
import { Typography } from "@components/common/typography/Typography";
import { Quiz } from "@interfaces/quiz";

interface Props {
  quizLists: Quiz.ListInformation;
  questionNumber: number;
}

export const QuestionForm = (props: Props): ReactElement => {
  const { quizLists, questionNumber } = props;
  return (
    <div className={styles.question_form}>
      <FormUi>
        <div className={styles.question_label}>
          <Typography color="white" variant="body2" weight="bold">
            Q{questionNumber}
          </Typography>
        </div>
        <div className={styles.question_body}>
          <Typography color="gray100" variant="body2" weight="bold">
            {quizLists.question}
          </Typography>
        </div>
      </FormUi>
    </div>
  );
};

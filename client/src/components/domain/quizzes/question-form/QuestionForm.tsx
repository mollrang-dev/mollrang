import { FormUi } from "@components/ui/form/FormUi";
import { ReactElement } from "react";
import styles from "./QuestionForm.module.scss";
import { Typography } from "@components/common/typography/Typography";

export const QuestionForm = (): ReactElement => {
  return (
    <div className={styles.question_form}>
      <FormUi>
        <div className={styles.question_label}>
          <Typography color="white" variant="body2" weight="bold">
            Q1
          </Typography>
        </div>
        <div className={styles.question_body}>
          <Typography color="gray100" variant="body2" weight="bold">
            Node.js TESt
          </Typography>
        </div>
      </FormUi>
    </div>
  );
};

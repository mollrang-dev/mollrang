import {FormUi} from "@components/ui/form/FormUi";
import {ReactElement} from "react";
import styles from './QuestionForm.module.scss';

export const QuestionForm = (): ReactElement => {
  return (
    <div className={styles.question_form}>
      <FormUi>
        Q1
        body
      </FormUi>
    </div>
  )
}
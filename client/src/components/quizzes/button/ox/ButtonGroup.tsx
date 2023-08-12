import {OXButton} from "@components/ui/OXButton/OXButton";
import React, {ReactElement} from "react";
import styles from './ButtonGroup.module.scss';
import {useAppDispatch, useAppSelector} from "@hooks/reduxHooks";
import {setCurrentStep} from "@store/slice/quizSlice";
import { insertQuizAnswer } from "@apis/quizzes";

export const ButtonGroup = (): ReactElement => {
  const dispatch = useAppDispatch();
  const {currentStep} = useAppSelector((state) => state.quiz);
  
  const onClickQuizAnswer = async (answer: string) => {
    dispatch(setCurrentStep(currentStep + 1))
    
    // quizId 제출
    insertQuizAnswer('')
    
  }
  return (
    <div className={styles.ox_button_group}>
      <OXButton variant={'O'} onClick={() => onClickQuizAnswer('o')}/>
      <OXButton variant={'X'} onClick={() => onClickQuizAnswer('x')}/>
    </div>
  )
}
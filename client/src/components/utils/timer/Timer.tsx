import { ReactElement, useEffect, useState } from "react";
import { ProgressBar } from "@components/ui/progressbar/ProgressBar";
import Image from "next/image";
import styles from "./Timer.module.scss";
import { useAppDispatch } from "@hooks/reduxHooks";
import { setEndOfQuiz, setTimer } from "@store/slice/quizSlice";

interface Props {
  time: number;
}

export const Timer = (props: Props): ReactElement => {
  const { time } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const makeTimer = setInterval(() => {
      dispatch(setTimer(time - 1));
    }, 1000);
    if (time <= 0) {
      dispatch(setEndOfQuiz(true));
      clearInterval(makeTimer);
    }

    return () => clearInterval(makeTimer);
  }, [time]);

  const timeIconAnimation = (): string => {
    if (time > time / 2) return "timer_start";
    else if (time > 0 && time <= 60 / 2) return "timer_half";
    else if (time <= 0) return "timer_end";
    else return "";
  };

  return (
    <div className={styles.timer}>
      <span className={styles[timeIconAnimation()]}>
        <Image src={"/images/alarm.svg"} alt={"alarm"} width={80} height={60} />
      </span>
      <ProgressBar currentTab={time} maxCount={60} />
    </div>
  );
};

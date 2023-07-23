import {ReactElement, useEffect, useState} from "react";
import {ProgressBar} from "@components/ui/progressbar/ProgressBar";
import Image from "next/image";
import styles from './Timer.module.scss';

interface Props {
  time: number
}

export const Timer = (props: Props): ReactElement => {
  const {time} = props;
  const [timer, setTimer] = useState<number>(time);

  useEffect(() => {
    const makeTimer = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    if (timer <= 0) clearInterval(makeTimer);

    return () => clearInterval(makeTimer);
  }, [timer])

  const timeIconAnimation = (): string => {
    if (timer > time / 2) return 'timer_start';
    else if (timer > 0 && timer <= time / 2) return 'timer_half';
    else if (timer <= 0) return 'timer_end';
  }

  return (
    <div className={styles.timer}>
      <span className={styles[timeIconAnimation()]}>
        <Image src={'/images/alarm.svg'} alt={'alarm'} width={80} height={60}/>
      </span>
      <ProgressBar currentTab={timer} maxCount={time}/>
    </div>
  )
}

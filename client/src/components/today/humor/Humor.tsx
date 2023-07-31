import styles from './Humor.module.scss';
import React, {ReactElement} from "react";
import {Typography} from "@components/common/typography/Typography";

export const Humor = (): ReactElement => {
  return (
    <div>
      <Typography
        className={styles.today_humor_label}
        variant={"h2"}
        color={"black500"}
        weight={"bold"}
      >
        피식 :)
      </Typography>
      <div className={styles.today_humor_wrapper}>
        <Typography
          className={"text-left"}
          variant={"body1"}
          color={"gray100"}
          weight={"bold"}
        >
          개발자들이 다크 모드를 쓰는 이유는???
        </Typography>
        <br/>
        <Typography
          className={"text-right"}
          variant={"body1"}
          color={"primary"}
          weight={"bold"}
        >
          밝으면 버그(bug)가 꼬여서... :)
        </Typography>
      </div>
    </div>
  )
}
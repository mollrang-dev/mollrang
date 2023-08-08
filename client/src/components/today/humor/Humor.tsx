import styles from "./Humor.module.scss";
import React, { ReactElement, useState } from "react";
import { Typography } from "@components/common/typography/Typography";
import { useQueryTodayHumorLists } from "@hooks/queries/todayHooks";

export interface HumorList {
  title: string;
  description: string;
}

export const Humor = (): ReactElement => {
  const { data } = useQueryTodayHumorLists();

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
          data-testid={"humor-title"}
        >
          {data && data.title}
        </Typography>
        <br />
        <Typography
          className={"text-right"}
          variant={"body1"}
          color={"primary"}
          weight={"bold"}
          data-testid={"humor-description"}
        >
          {data && data.description}
        </Typography>
      </div>
    </div>
  );
};

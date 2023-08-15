import styles from "./Humor.module.scss";
import React, { ReactElement } from "react";
import { Typography } from "@components/common/typography/Typography";
import { useQueryTodayHumorLists } from "@hooks/queries/todayHooks";
import classNames from "classnames";

export interface HumorList {
  title: string;
  description: string;
}

export const Humor = (): ReactElement => {
  const { data, isLoading } = useQueryTodayHumorLists();

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

      {isLoading ? (
        <>isLoading... skeleton 적용</>
      ) : (
        <div className={classNames(styles.today_humor_wrapper)}>
          <div className={""}>
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
      )}
    </div>
  );
};

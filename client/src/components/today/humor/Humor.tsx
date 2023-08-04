import styles from './Humor.module.scss';
import React, {ReactElement, useEffect, useState} from "react";
import {Typography} from "@components/common/typography/Typography";
import {axiosInstance} from "@libs/axios";

interface Humor {
  title: string;
  description: string;
}

export const Humor = (): ReactElement => {
  const [humor, setHumor] = useState<Humor>({title: '', description: ''});

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const {data} = await axiosInstance.get('/today/humor');
    setHumor(data);
  }

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
          {humor.title}
        </Typography>
        <br/>
        <Typography
          className={"text-right"}
          variant={"body1"}
          color={"primary"}
          weight={"bold"}
        >
          {humor.description}
        </Typography>
      </div>
    </div>
  )
}
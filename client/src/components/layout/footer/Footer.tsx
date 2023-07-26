import {ReactElement} from "react";
import styles from "./Footer.module.scss";
import {Typography} from "@components/common/typography/Typography";

export const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <Typography variant={'caption'} color={'gray100'} className={'text-center'}>
        Copyright 2023. 2Ruk & DaHoon06 all rights reserved.
      </Typography>
    </footer>
  );
};

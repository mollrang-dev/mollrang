import {ReactElement} from "react";
import styles from './GithubButton.module.scss';
import {Icon} from "@components/common/icon/Icon";
import {Typography} from "@components/common/typography/Typography";

export const GithubButton = (): ReactElement => {
  return (
    <button className={styles.github_button} type={'button'}>
      <Icon className={'mr-12'} type={"github"} width={20} height={20}/>
      <Typography color={'white'} weight={'bold'} as={'span'} variant={'caption'}>
        GitHub Login
      </Typography>
    </button>
  )
}
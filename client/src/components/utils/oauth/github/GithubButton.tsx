import {ReactElement} from "react";
import styles from './GithubButton.module.scss';
import {Icon} from "@components/common/icon/Icon";
import {Typography} from "@components/common/typography/Typography";
import {useAppDispatch} from "@hooks/reduxHooks";
import {setLogin} from "@store/slice/authSlice";

export const GithubButton = (): ReactElement => {
  const dispatch = useAppDispatch();
  const githubLogin = () => {
    try {
      dispatch(setLogin(true))
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <button className={styles.github_button} type={'button'} onClick={githubLogin}>
      <Icon className={'mr-12'} type={"github"} width={20} height={20}/>
      <Typography color={'white'} weight={'bold'} as={'span'} variant={'caption'}>
        GitHub Login
      </Typography>
    </button>
  )
}
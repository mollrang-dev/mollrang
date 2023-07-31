import {ReactElement} from "react";
import styles from './GithubButton.module.scss';
import {Icon} from "@components/common/icon/Icon";
import {Typography} from "@components/common/typography/Typography";
import {signIn, signOut, useSession} from "next-auth/react";

export const GithubButton = (): ReactElement => {
  const {data: session} = useSession();

  const login = async () => {
    await signIn('github');
  };

  const logout = async () => {
    await signOut();
  };

  return (
    <button className={styles.github_button} type={'button'} onClick={session && session.user ? logout : login}>
      <Icon className={'mr-12'} type={"github"} width={20} height={20}/>
      <Typography color={'white'} weight={'bold'} as={'span'} variant={'caption'}>
        {session && session.user ? 'logout' : 'GitHub Login'}
      </Typography>
    </button>
  )
}
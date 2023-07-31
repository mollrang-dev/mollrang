import {UserProfile} from "@components/domains/users/profile/UserProfile";
import {useSession} from "next-auth/react";
import {ReactElement} from "react";

export const UserContainer = (): ReactElement => {
  const {data: session} = useSession();

  //TODO: ID를 통해서 맞춘문제 틀린 문제 구해야함

  if (session)
    return <UserProfile profile={session.user}/>
  return null;
}
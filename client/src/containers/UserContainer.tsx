import { UserProfile } from "@components/users/profile/UserProfile";
import { useSession } from "next-auth/react";
import { ReactElement } from "react";

export type ProfileComponentType = "default" | "side";

interface Props {
  profileComponentType: ProfileComponentType;
}

export const UserContainer = (props: Props): ReactElement => {
  const { profileComponentType } = props;
  const { data: session } = useSession();

  //TODO: ID를 통해서 맞춘문제 틀린 문제 구해야함

  if (session)
    return (
      <UserProfile
        profile={session.user}
        profileBoxType={profileComponentType}
      />
    );
  return null;
};

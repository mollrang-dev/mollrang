import {UserProfile} from "@components/users/profile/UserProfile";
import {useSession} from "next-auth/react";
import {ReactElement} from "react";

export type ProfileComponentType = "default" | "side";

interface Props {
  profileComponentType: ProfileComponentType;
}

export const UserContainer = (props: Props): ReactElement => {
  const {profileComponentType} = props;
  const {data: session} = useSession();

  if (session)
    return (
      <UserProfile
        profile={session.user}
        profileBoxType={profileComponentType}
      />
    );
  return null;
};

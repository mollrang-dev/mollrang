import React, { ReactElement } from "react";
import styles from "./UserProfile.module.scss";
import { Typography } from "@components/common/typography/Typography";
import Image from "next/image";
import { User } from "@interfaces/user";
import { Icon } from "@components/common/icon/Icon";
import { ProfileComponentType } from "@containers/UserContainer";

interface Props {
  profile: User.Profile;
  profileBoxType: ProfileComponentType;
}

export const UserProfile: React.FC<Props> = (props): ReactElement => {
  const { profile, profileBoxType } = props;

  const isSideMenuOpen = (): boolean => {
    return profileBoxType === "side";
  };

  return (
    <div className={styles.user_profile}>
      <div className={styles.profile_container}>
        <picture
          aria-label={"깃허브 사용자 프로필 이미지"}
          className={styles.profile_img_wrapper}
        >
          <Image
            className={styles.user_profile_img}
            src={profile.image}
            alt={profile.name}
            width={80}
            height={80}
          />
        </picture>

        <div className={styles.user_profile_box}>
          <Typography
            variant={"body1"}
            color={isSideMenuOpen() ? "white" : "gray800"}
          >
            {profile.name} {!isSideMenuOpen() && "님 반갑습니다."}
          </Typography>
          <div>
            <div className={"flex"}>
              {!isSideMenuOpen() && (
                <Icon
                  className={"mr-8"}
                  type={"thumbs-up"}
                  width={18}
                  height={18}
                />
              )}

              <Typography
                variant={"caption"}
                weight={"light"}
                color={isSideMenuOpen() ? "white" : "gray750"}
              >
                맞춘 문제
              </Typography>
            </div>

            <div className={"flex"}>
              {!isSideMenuOpen() && (
                <Icon
                  className={"mr-8"}
                  type={"wrong-note"}
                  width={20}
                  height={18}
                />
              )}

              <Typography
                variant={"caption"}
                weight={"light"}
                color={isSideMenuOpen() ? "white" : "gray750"}
              >
                틀린 문제
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

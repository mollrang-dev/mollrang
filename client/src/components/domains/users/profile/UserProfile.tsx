import React, {ReactElement} from "react";
import styles from './UserProfile.module.scss';
import {Typography} from "@components/common/typography/Typography";
import Image from "next/image";
import {User} from "@interfaces/user";
import {Icon} from "@components/common/icon/Icon";

interface Props {
  profile: User.Profile;
}

export const UserProfile: React.FC<Props> = (props): ReactElement => {
  const {profile} = props;

  return (
    <div className={styles.user_profile}>
      <div className={styles.profile_container}>
        <picture className={styles.profile_img_wrapper}>
          <Image className={styles.user_profile_img} src={profile.image} alt={profile.name}
                 width={80} height={80}/>
        </picture>

        <div>
          <Typography variant={'body1'} color={'gray800'}>{profile.name} 님 반갑습니다.</Typography>
          <div>
            <div className={'flex'}>
              <Icon className={'mr-8'} type={"thumbs-up"} width={18} height={18}/>
              <Typography variant={'caption'} weight={'light'} color={'gray750'}>맞춘 문제</Typography>
            </div>

            <div className={'flex'}>
              <Icon className={'mr-8'} type={"wrong-note"} width={20} height={18}/>
              <Typography variant={'caption'} weight={'light'} color={'gray750'}>틀린 문제</Typography>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
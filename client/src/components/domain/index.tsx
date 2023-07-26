import {ReactElement} from "react"
import Image from "next/image";
import {Icon} from "@components/common/icon/Icon";
import {Button} from "@components/common/button/Button";
import {Typography} from "@components/common/typography/Typography";
import styles from './index.module.scss';

export const Root = (): ReactElement => {
  return (
    <div className={styles.root_container}>
      <section className={styles.root_items_container}>
        <div>
          <Image src={'/images/banner.svg'} alt={'banner'} width={216} height={190}/>
        </div>
        <div className={styles.root_description_container}>
          <div className={styles.description_container}>
            <div className={styles.description_1_wrapper}>
              <Icon type={'note'} width={36} height={36}/>
              <Typography color={'black500'} variant={'body1'}>
                너 그거 알아?
              </Typography>
            </div>
            <div className={styles.description_2_wrapper}>
              <Typography color={'primary'} variant={'body1'} weight={'bold'}>
                몰랑
              </Typography>
              <Icon className={styles.question_icon} type={'question'} width={36} height={36}/>

            </div>
          </div>
          <div>
            <Button className={styles.quiz_start_button} variant={'primary-rounded'}
                    icon={<Icon type={"open-book"} width={20} height={20}/>}>
              <Typography className={'ml-8'} color={'white'} variant={'body2'} weight={'bold'}>
                퀴즈 풀기
              </Typography>
            </Button>
          </div>
        </div>
      </section>
      < hr/>
      <section>
        <div>
          <Typography className={styles.today_humor_label} variant={'h2'} color={'black500'} weight={'bold'}>
            피식 :)
          </Typography>
          <div className={styles.today_humor_wrapper}>
            <Typography className={'text-left'} variant={'body1'} color={'gray100'} weight={'bold'}>개발자들이 다크 모드를 쓰는
              이유는???</Typography>
            <br/>
            <Typography className={'text-right'} variant={'body1'} color={'primary'} weight={'bold'}>밝으면 버그(bug)가 꼬여서...
              :)</Typography>
          </div>
        </div>
      </section>
    </div>
  )
}

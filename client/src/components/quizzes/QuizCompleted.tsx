import {Button} from "@components/common/button/Button";
import {Typography} from "@components/common/typography/Typography";
import {useRouter} from "next/router";
import {ReactElement} from "react";

export const QuizCompleted = (): ReactElement => {
  const router = useRouter();
  //TODO: reset state
  const onClickHandlerRedirectHome = async () => {
    await router.push('/');
  }
  return (
    <div>
      <div>
        퀴즈 종료
        맞춘문제 3
        틀린문제 2
        <Button onClick={onClickHandlerRedirectHome}>
          <Typography color={'white'} weight={'bold'}>홈으로</Typography>
        </Button>
      </div>
    </div>
  )
}
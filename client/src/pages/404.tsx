import {Button} from "@components/common/Button";
import {Typography} from "@components/common/Typography";
import {NextPage} from "next";
import Image from "next/image";
import {ReactElement} from "react";
import styles from "@styles/pages/404Page.module.scss";
import {useRouter} from "next/router";

const Error404Page: NextPage = (): ReactElement => {
  const router = useRouter();
  const redirectHome = async () => {
    await window.location.replace('/');
  }
  return (
    <div className={styles.page_404}>
      <picture>
        <Image
          loading="eager"
          src="/images/404.svg"
          alt="404-error-page"
          width={300}
          height={200}
        />
      </picture>
      <section>
        <Typography variant="h1" weight="bold" color="black100">
          페이지를 찾을 수 없습니다.
        </Typography>
        <Typography
          variant="caption"
          weight="bold"
          color="gray900"
          className="mt-20"
        >
          페이지가 존재하지 않거나, 접근할 수 없는 페이지 입니다.
        </Typography>
      </section>
      <Button variant="primary-outline" className="mt-36" onClick={redirectHome}>
        <Typography as="span" weight="bold" color="primary">
          돌아가기
        </Typography>
      </Button>
    </div>
  );
};

export default Error404Page;

import { Button } from "@components/common/button/Button";
import { Typography } from "@components/common/typography/Typography";
import { NextPage } from "next";
import Image from "next/image";
import { ReactElement } from "react";
import styles from "@styles/pages/404Page.module.scss";

const Error404Page: NextPage = (): ReactElement => {
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
      <Button variant="primary-outline" className="mt-36">
        <Typography as="span" weight="bold" color="primary">
          이전 페이지로 이동
        </Typography>
      </Button>
    </div>
  );
};

export default Error404Page;

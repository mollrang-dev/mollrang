import { GetServerSideProps, NextPage } from "next";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import { getSession } from "next-auth/react";
import React, { ReactElement } from "react";
import Image from "next/image";
import { Icon } from "@components/common/icon/Icon";
import { Typography } from "@components/common/typography/Typography";
import styles from "@styles/pages/index.module.scss";
import { useSession } from "next-auth/react";
import { UserContainer } from "@containers/UserContainer";
import { PlayQuizButton } from "@components/quizzes/button/play/QuizButton";
import { Humor } from "@components/today/humor/Humor";

const Home: NextPage = (): ReactElement => {
  const { data: session } = useSession();

  return (
    <div className={styles.root_container}>
      {session && session.user ? (
        <>
          <section className={"mb-20"}>
            <UserContainer profileComponentType="default" />
            <div className={styles.play_quiz_wrapper}>
              <PlayQuizButton />
            </div>
          </section>
        </>
      ) : (
        <>
          <section className={styles.root_items_container}>
            <div>
              <Image
                priority={true}
                src={"/images/banner.svg"}
                alt={"banner"}
                width={216}
                height={190}
              />
            </div>
            <div className={styles.root_description_container}>
              <div className={styles.description_container}>
                <div className={styles.description_1_wrapper}>
                  <Icon type={"note"} width={36} height={36} />
                  <Typography color={"black500"} variant={"body1"}>
                    너 그거 알아?
                  </Typography>
                </div>
                <div className={styles.description_2_wrapper}>
                  <Typography
                    color={"primary"}
                    variant={"body1"}
                    weight={"bold"}
                  >
                    몰랑
                  </Typography>
                  <Icon
                    className={styles.question_icon}
                    type={"question"}
                    width={36}
                    height={36}
                  />
                </div>
              </div>

              <PlayQuizButton />
            </div>
          </section>
        </>
      )}

      <hr />

      <section>
        <Humor />
      </section>
    </div>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      //session 객체 pre-fetching
      const session = await getSession(ctx);
      ctx.res.setHeader("Cache-Control", "public, max-age=59");

      return {
        props: {
          session,
        },
      };
    } catch (e) {
      return {
        props: {},
      };
    }
  },
);

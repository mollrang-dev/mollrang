import {Root} from "@components/domains";
import {GetServerSideProps, NextPage} from "next";
import {ReactElement} from "react";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import {getSession} from "next-auth/react";

const Home: NextPage = (): ReactElement => {
  return <Root/>;
};
export default Home;

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      //session 객체 pre-fetching
      const session = await getSession(ctx);
      ctx.res.setHeader('Cache-Control', 'public, max-age=59');

      return {
        props: {
          session
        },
      };
    } catch (e) {
      return {
        props: {}
      }
    }
  },
);

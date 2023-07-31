import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_KEY,
    }),
  ],
  session: {strategy: 'jwt'},
  callbacks: {
    async signIn({account, profile, email, credentials, user}) {
      return true;
    },
    async jwt({token, account, profile}) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }

      if (profile) {
        token.profile = profile;
      }
      return token;
    },
    async session({session, token, user}) {
      session.profile = token.profile;
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_OAUTH_SECRET,
});

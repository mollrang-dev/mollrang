import {NextFetchEvent, NextRequest, NextResponse} from 'next/server';
import {getToken} from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_SECRET_KEY;

export async function middleware(req: NextRequest, event: NextFetchEvent): Promise<Response | undefined> | Response | undefined {
  const token = await getToken({req, secret, raw: true});
  const {pathname} = req.nextUrl
  const confirmedUrl = ['/quizzes']
  if (!confirmedUrl.includes(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = '/'
    // TODO: 퀴즈를 풀기위해서는 로그인이 필요
    // 토큰이 존재한다면 로그인을 한 상태 이므로 페이지 패스
    // 아니면 홈으로 이동
    if (token)
      return NextResponse.next();
    else
      return NextResponse.redirect(new URL(url, req.url));
  }
  return middleware(req, event);
}

// MARK: 미들웨어를 실행시켜야할 경로 추가
export const config = {
  matcher: ['/quizzes/:path*'],
}




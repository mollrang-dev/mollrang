import {NextFetchEvent, NextRequest, NextResponse} from 'next/server';
import {getToken} from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_SECRET_KEY;

export async function middleware(req: NextRequest, event: NextFetchEvent): Promise<Response> {
  try {
    const token = await getToken({req, secret, raw: true});
    const {pathname} = req.nextUrl
    const confirmedUrl = ['/quizzes']
    if (!confirmedUrl.includes(pathname)) {
      const url = req.nextUrl.clone();
      url.pathname = '/'
      if (token)
        return NextResponse.next();
      else
        return NextResponse.redirect(new URL(url, req.url));
    }
    return middleware(req, event);
  } catch (e) {
    return NextResponse.redirect(new URL('/404', req.url));
  }
}

// MARK: 미들웨어를 실행시켜야할 경로 추가
export const config = {
  matcher: ['/quizzes/:path*'],
}




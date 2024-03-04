import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const unauthenticatedPages = ['/', '/register'];

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('user.token')?.value;
  const url = new URL(request.url);
  const { pathname } = url;

  // If the user is not logged in and is trying to access a page that requires authentication, redirect to the login page
  if (!userToken && !unauthenticatedPages.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If the user is logged in and is trying to access a page that does not require authentication, redirect to the dashboard
  if (unauthenticatedPages.includes(pathname) && userToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};

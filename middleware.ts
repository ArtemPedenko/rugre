import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'

export const config = {
  matcher: "/admin/:path*",
};
// This function can be marked async if using await inside
export function middleware(request: NextRequest, response: NextResponse) {
  //const currentPath = request.nextUrl.pathname

  // if (request.nextUrl.pathname.startsWith('/admin')) {
  //   const cookieStore = cookies()
  //   const accessToken = cookieStore.get('accessToken')?.value
  //   const refreshToken = cookieStore.get('refreshToken')?.value
  //
  //   if (accessToken && refreshToken) {
  //     const decodedAccessToken: any = jwt.decode(accessToken);
  //     console.log(decodedAccessToken)
  //     // Далее делайте что-то с decodedAccessToken
  //   } else {
  //     // Обработка случая, когда accessToken не определен
  //     return NextResponse.redirect(new URL('/login', request.url));
  //   }
  //   //return NextResponse.rewrite(new URL('/about-2', request.url))
  // }

  /* console.log(request);
  console.log(response); */
  //response
  /* return Response.json(
    { success: false, message: "authentication failed" },
    { status: 401 }
  ); */
  //redirect
  /* return NextResponse.redirect(new URL("/home", request.url)); */
  console.log(request.nextUrl.pathname);
}
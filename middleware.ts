import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { refreshAccessToken } from "./app/utils/services/userService";

export const config = {
  matcher: "/admin/((?!api|_next/static|_next/image|favicon.ico).*)",
};
// This function can be marked async if using await inside
export async function middleware(request: NextRequest, response: NextResponse) {
  const currentPath = request.nextUrl.pathname;

  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (accessToken && refreshToken) {
    const decodedAccessToken: any = jwt.decode(accessToken);
    const decodedRefreshToken: any = jwt.decode(accessToken);

    const expirationRefreshToken = new Date(
      decodedRefreshToken.exp * 1000
    ).getTime();
    const expirationAccessToken = new Date(
      decodedAccessToken.exp * 1000
    ).getTime();

    const now = new Date();
    const nowSeconds = now.getTime();
    console.log(decodedAccessToken.exp * 1000 - nowSeconds);
    ////изменить
    console.log(decodedAccessToken);
    if (decodedAccessToken.exp * 1000 < 600000000000000) {
      console.log("start in middleware");
      console.log(currentPath);
      await refreshAccessToken(decodedAccessToken.login);
    }
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  //return NextResponse.rewrite(new URL('/about-2', request.url))

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

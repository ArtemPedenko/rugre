import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { refreshAccessToken } from "@/app/utils/services/userService";
import { isTokenValid } from "@/app/utils/services/jwtService";

export const config = {
  matcher: "/admin/((?!api|_next/static|_next/image|favicon.ico).*)",
};

export async function middleware(request: NextRequest, response: NextResponse) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }

  const isRefreshTokenValid = isTokenValid(refreshToken, "root");

  if (!isRefreshTokenValid || isRefreshTokenValid.exp < 0) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
  if (!accessToken) {
    return await fRefreshAccessToken(isRefreshTokenValid.login, refreshToken);
  }

  const isAccessTokenValid = isTokenValid(accessToken, "root");

  if (!isAccessTokenValid || isAccessTokenValid.exp < 60000) {
    return await fRefreshAccessToken(isRefreshTokenValid.login, refreshToken);
  }
}

async function fRefreshAccessToken(login: string, refreshToken: string) {
  const res = await refreshAccessToken(login, refreshToken);
  const response = NextResponse.next();

  const newDecodedRefreshToken: any = jwt.decode(res.refreshToken);
  const newDecodedAccessToken: any = jwt.decode(res.accessToken);

  const newExpirationRefreshToken = new Date(newDecodedRefreshToken.exp * 1000);
  const newExpirationAccessToken = new Date(newDecodedAccessToken.exp * 1000);
  response.cookies.set({
    name: "refreshToken",
    value: res.refreshToken,
    httpOnly: true,
    path: "/",
    expires: newExpirationRefreshToken,
    secure: true,
  });
  response.cookies.set({
    name: "accessToken",
    value: res.accessToken,
    httpOnly: true,
    path: "/",
    expires: newExpirationAccessToken,
  });
  return response;
}

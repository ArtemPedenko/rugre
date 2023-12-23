import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { refreshAccessToken } from "./app/utils/services/userService";

export const config = {
  matcher: "/admin/((?!api|_next/static|_next/image|favicon.ico).*)",
};

export async function middleware(request: NextRequest, response: NextResponse) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value || "";
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (refreshToken) {
    const decodedRefreshToken: any = jwt.decode(refreshToken);
    const expirationRefreshToken = new Date(
      decodedRefreshToken.exp * 1000
    ).getTime();

    const decodedAccessToken: any = jwt.decode(accessToken);

    const expirationAccessToken = new Date(
      decodedAccessToken.exp * 1000
    ).getTime();

    const now = new Date();
    const nowSeconds = now.getTime();
    if (decodedAccessToken.exp * 1000 - nowSeconds < 60000) {
      fRefreshAccessToken(decodedAccessToken.login, refreshToken);
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  async function fRefreshAccessToken(login: string, refreshToken: string) {
    const res = await refreshAccessToken(login, refreshToken);
    const response = NextResponse.next();

    const newDecodedRefreshToken: any = jwt.decode(res.refreshToken);
    const newDecodedAccessToken: any = jwt.decode(res.accessToken);

    const newExpirationRefreshToken = new Date(
      newDecodedRefreshToken.exp * 1000
    );
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
}

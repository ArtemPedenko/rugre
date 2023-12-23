import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { refreshAccessToken } from "./app/utils/services/userService";
import { isTokenValid } from "@/app/utils/services/jwtService";

export const config = {
  matcher: "/admin/((?!api|_next/static|_next/image|favicon.ico).*)",
};

export async function middleware(request: NextRequest, response: NextResponse) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (refreshToken) {
    const refreshTokenValid = isTokenValid(refreshToken, "root");
    //проверяем на валидность рефреш токен
    if (refreshTokenValid) {
      if (accessToken) {
        const accessTokenValid = isTokenValid(accessToken, "root");
        //если аксес токен не валидный или осталось ему жить меньше минуты, получаем новый
        if (!accessTokenValid || accessTokenValid.exp < 60000) {
          console.log("аксесс токен не валидный");
          return await fRefreshAccessToken(
            refreshTokenValid.login,
            refreshToken,
          );
        }
        //если нет access токена, получаем новый
      } else {
        console.log("нет аксес токена");
        return await fRefreshAccessToken(refreshTokenValid.login, refreshToken);
      }
      //если рефреш токен не валиден, идем на логин
    } else {
      console.log("рефреш не валиден");
      return NextResponse.redirect(new URL("/login", request.url));
    }
    //если рефреш токена нет, идем на логин
  } else {
    console.log("нет рефреша");
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
async function fRefreshAccessToken(login: string, refreshToken: string) {
  const res = await refreshAccessToken(login, refreshToken);
  const response = NextResponse.next();

  const newDecodedRefreshToken: any = jwt.decode(res.refreshToken);
  const newDecodedAccessToken: any = jwt.decode(res.accessToken);

  const newExpirationRefreshToken = new Date(newDecodedRefreshToken.exp * 1000);
  const newExpirationAccessToken = new Date(newDecodedAccessToken.exp * 1000);
  console.log(res);
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

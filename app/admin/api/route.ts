import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

function cooketSetting(refreshToken: string, accessToken: string) {
  const decodedRefreshToken: any = jwt.decode(refreshToken);
  const decodedAccessToken: any = jwt.decode(accessToken);

  const expirationRefreshToken = new Date(decodedRefreshToken.exp * 1000);
  const expirationAccessToken = new Date(decodedAccessToken.exp * 1000);

  cookies().set({
    name: "refreshToken",
    value: refreshToken,
    httpOnly: true,
    path: "/",
    expires: expirationRefreshToken,
    secure: true,
  });
  cookies().set({
    name: "accessToken",
    value: accessToken,
    httpOnly: true,
    path: "/",
    expires: expirationAccessToken,
  });
}

export async function POST(request: Request) {
  console.log("api route request");
  const headersList = headers();
  const url: string = headersList.get("url")!;
  const switchCase: string = headersList.get("case")!;
  const req = await request.json();
  const refreshToken = cookies().get("refreshToken")?.value!;
  switch (switchCase) {
    case "login": {
      const res = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      });

      type serverResponse = {
        refreshToken: string;
        accessToken: string;
      };

      const resJson: serverResponse = await res.json();
      if (res.status === 200) {
        const { refreshToken, accessToken } = resJson;
        cooketSetting(refreshToken, accessToken);

        return new NextResponse(JSON.stringify({ success: true }), {
          status: 200,
        });
      } else {
        return new NextResponse(JSON.stringify(resJson), {
          status: res.status,
        });
      }
    }

    case "refreshAccessToken": {
      const res = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: refreshToken,
        },
        body: JSON.stringify(req),
      });
      const resJson = await res.json();
      return new NextResponse(JSON.stringify(resJson), {
        status: 200,
      });
    }
    default:
      return new NextResponse(JSON.stringify({ sucess: false }));
  }
}

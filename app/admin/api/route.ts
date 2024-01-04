import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

export const revalidate = 1;

function cookieSetting(refreshToken: string, accessToken: string) {
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
    sameSite: "none",
  });
  cookies().set({
    name: "accessToken",
    value: accessToken,
    httpOnly: true,
    path: "/",
    expires: expirationAccessToken,
    secure: true,
    sameSite: "none",
  });
}

export async function POST(request: NextRequest) {
  const headersList = headers();
  const url: string = headersList.get("url")!;
  const switchCase: string = headersList.get("case")!;
  const refreshToken = cookies().get("refreshToken")?.value!;
  const accessToken = cookies().get("accessToken")?.value!;

  switch (switchCase) {
    case "login": {
      const req = await request.json();
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
        cookieSetting(refreshToken, accessToken);

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
      const req = await request.json();
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

    case "fileUpload": {
      const formData = await request.formData();
      const file = formData.get("file");
      const data = new FormData();
      if (file) {
        data.append("file", file);
      }
      const res = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          Cookie: `accessToken=${accessToken};`,
        },
        body: data,
      });
      const response = await res.json();
      return new NextResponse(JSON.stringify(response));
    }
    default:
      return new NextResponse(JSON.stringify({ success: false }));
  }
}

export async function GET(request: Request) {
  const headersList = headers();
  const accessToken = cookies().get("accessToken")?.value!;
  const url: string = headersList.get("url")!;
  const res = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `accessToken=${accessToken};`,
    },
  });
  const response = await res.json();
  return new NextResponse(JSON.stringify(response));
}

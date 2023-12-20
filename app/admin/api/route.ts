import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
export async function POST(request: Request) {
  const req = await request.json();
  console.log("route req");
  console.log(req);
  /* switch (req.case) {
    case "login": {
      const res = await fetch(req.url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: req.login, password: req.password }),
      });

      type serverResponse = {
        refreshToken: string;
        accessToken: string;
      };

      const resJson: serverResponse = await res.json();
      if (res.status === 200) {
        const { refreshToken, accessToken } = resJson;

        const decodedRefreshToken: any = jwt.decode(refreshToken);
        const decodedAccessToken: any = jwt.decode(accessToken);

        const expirationRefreshToken = new Date(decodedRefreshToken.exp * 1000);
        const expirationAccessToken = new Date(decodedAccessToken.exp * 1000);

        //добавить секьюрное поле для прода
        cookies().set({
          name: "refreshToken",
          value: resJson.refreshToken,
          httpOnly: true,
          path: "/",
          expires: expirationRefreshToken,
        });
        cookies().set({
          name: "accessToken",
          value: resJson.accessToken,
          httpOnly: true,
          path: "/",
          expires: expirationAccessToken,
        });
        //redirect('https://nextjs.org/')
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
      console.log("api toute");
      const res = await fetch(req.url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: req.login }),
      });
      const resJson = await res.json();
      console.log(resJson);
      return new NextResponse(JSON.stringify(resJson), {
        status: res.status,
      });
    }
    default:
      return new NextResponse(JSON.stringify({ sucess: false }));
  } */
  return new NextResponse(JSON.stringify(req));

  // return new NextResponse(e.message);
}

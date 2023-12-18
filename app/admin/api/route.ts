import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request, response: NextResponse) {
  const req = await request.json();
  console.log(req);

  const res = await fetch(req.url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login: req.login, password: req.password }),
  });
  const resJson = await res.json();
  /*  cookies().set("authorization", resJson.accessToken);
   */
  /*  const res = await fetch("https://arthttp.ru/api/user/refresh-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
    body: JSON.stringify({ login: req.login }),
  });
  const resJson = await res.json();
  console.log(resJson);
  cookies().set("authorization", resJson.accessToken); */

  return new NextResponse(JSON.stringify(resJson), {
    status: 200,
    headers: {
      "Set-Cookie": `refreshToken=${resJson.refreshToken}; sameSite=true; httpOnly=true; path="/"`,
    },
  });
}

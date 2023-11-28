import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/admin/:path*",
};
// This function can be marked `async` if using `await` inside
let a = 1;
export function middleware(request: NextRequest, response: NextResponse) {
  a = a + 1;

  console.log(a);

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

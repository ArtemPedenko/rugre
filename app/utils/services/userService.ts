import { endpoints } from "@/app/utils/constants";
async function loginUser(login: string, password: string) {
  const response = await fetch("/admin/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      url: endpoints.user,
      case: "login",
    },
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  });
  return await response.json();
}

//https://arthttp.ru/api/user/refresh-token
async function refreshAccessToken(login: string, refreshToken: string) {
  const response = await fetch(endpoints.refreshToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
      url: endpoints.refreshToken,
      case: "refreshAccessToken",
      Cookie: `refreshToken=${refreshToken}`,
    },
    body: JSON.stringify({
      login: login,
    }),
  });
  return await response.json();
}

export { loginUser, refreshAccessToken };

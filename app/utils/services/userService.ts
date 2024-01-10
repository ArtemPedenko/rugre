async function loginUser(login: string, password: string) {
  const response = await fetch("/admin/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      url: "https://arthttp.ru/api/user/login",
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
  const response = await fetch(`${process.env.BASE_URL}/admin/api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
      url: "https://arthttp.ru/api/user/refresh-token",
      case: "refreshAccessToken",
      Cookie: `refreshToken=${refreshToken}`,
    },
    body: JSON.stringify({
      login: login,
    }),
  });
  const res = await response.json();
  return res;
}

export { loginUser, refreshAccessToken };

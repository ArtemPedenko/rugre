async function loginUser(login: string, password: string) {
  const response = await fetch("/admin/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: login,
      password: password,
      url: "https://arthttp.ru/api/user/login",
    }),
  });
  return await response.json();
}

async function refreshAccessToken(login: string) {
  console.log("service");
  console.log(login);
  const response = await fetch(
    "https://turbo-space-palm-tree-7g5pgwgqxw62w67q-3000.app.github.dev/admin/api",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login,
        url: "https://arthttp.ru/api/user/refresh-token",
        case: "refreshAccessToken",
      }),
    }
  );
  const result = await response.json();
  console.log(result);
}

export { loginUser, refreshAccessToken };

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
    })
    return await response.json();
}

export {loginUser};
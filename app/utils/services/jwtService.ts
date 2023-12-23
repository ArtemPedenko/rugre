import jwt from "jsonwebtoken";

function isTokenValid(token: string, role: string) {
  const decodedToken: any = jwt.decode(token);
  const nowSeconds = new Date().getTime();
  if (decodedToken.exp * 1000 < nowSeconds || decodedToken.role !== role) {
    return false;
  }

  return {
    exp: decodedToken.exp * 1000 - nowSeconds,
    login: decodedToken.login,
  };
}

export { isTokenValid };

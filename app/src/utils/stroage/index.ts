export const setTokenToStorage = (
  tokenName: "accessToken" | "refreshToken",
  token: string
) => {
  if (tokenName === "accessToken") {
    sessionStorage.setItem(tokenName, token);
  } else if (tokenName === "refreshToken") {
    localStorage.setItem(tokenName, token);
  }
};

export const getTokenToStorage = (
  tokenName: "accessToken" | "refreshToken"
) => {
  if (tokenName === "accessToken") {
    return sessionStorage.getItem(tokenName);
  }
  if (tokenName === "refreshToken") {
    return localStorage.getItem(tokenName);
  }
};

export const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
};

import decode from "jwt-decode";

export const getAuthUserData = () => {
  const data = localStorage.getItem("authUserData");
  return data ? JSON.parse(data) : null;
};

export const setAuthUserData = data => {
  localStorage.setItem("authUserData", JSON.stringify(data));
};

export const removeAuthUserData = () => {
  localStorage.removeItem("authUserData");
};

export const checkTokenExpire = token => {
  try {
    const { exp } = decode(token);
    const currentTime = new Date().getTime() / 1000;

    if (currentTime > exp) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};

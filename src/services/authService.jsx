import api from "./axiosConfig";

const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      login: email,
      pass: password
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const refreshToken = async () => {
  try {
    let refreshToken = localStorage.getItem("refreshToken");

    const { data } = await api.post("/auth/refresh", {
      refreshToken: refreshToken
    });

    localStorage.setItem("accessToken", data.access_token);
    localStorage.setItem("refreshToken", data.refresh_token);
  } catch (err) {
    console.error(err);
  }
};

export default refreshToken;

const logout = async () => {
  try {
    await api.post("/auth/logout");
    return true;
  } catch (err) {
    console.error(err);
  }
};

export { login, logout };

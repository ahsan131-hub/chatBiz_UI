import { LOGIN, LOGOUT } from "./actionType";

export const login = (content) => ({
  type: LOGIN,
  payload: {
    username: content.username,
    password: content.password,
  },
});
export const logout = (content) => ({
  type: LOGOUT,
});

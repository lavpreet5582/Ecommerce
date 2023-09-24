import axios from "axios";

const API_URL = "http://localhost:8000/accounts/";

const register = (first_name, last_name, email, password) => {
  return axios.post(API_URL + "signup/", {
    first_name,
    last_name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login/", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }

      return response.data;
    }).catch((error) => {
      return error.response
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
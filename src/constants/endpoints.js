const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3333";

const endpoints = {
  LOGIN: "/login",
  REGISTER: "/register",
  USER: "/user",
  PORTFOLIO: "/portfolio",
};

export { BASE_URL };

export default endpoints;

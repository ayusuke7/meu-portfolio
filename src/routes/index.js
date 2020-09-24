import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

const routes = [
  {
    exact: true,
    path: "/login",
    component: LoginPage,
  },
  {
    exact: true,
    path: "/home",
    component: HomePage,
  },
];

export default routes;

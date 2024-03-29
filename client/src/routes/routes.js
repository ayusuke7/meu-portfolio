import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import NotFound from "../pages/NotFound";
import PerfilPage from "../pages/Perfil";
import PortfolioPage from "../pages/Portfolio";
import RegisterPage from "../pages/Register";

const routes = [
  {
    exact: true,
    path: "/login",
    component: LoginPage,
  },
  {
    exact: true,
    path: "/register",
    component: RegisterPage,
  },
  {
    exact: true,
    path: "/home/:username",
    component: HomePage,
    isPrivate: true,
  },
  {
    exact: true,
    path: "/perfil/:username",
    component: PerfilPage,
  },
  {
    exact: true,
    path: "/portfolio/:username",
    component: PortfolioPage,
  },
  {
    exact: true,
    path: "/portfolio/:username/:portfolio",
    component: NotFound,
  },
  {
    exact: true,
    path: "/*",
    component: NotFound,
  },
];

export default routes;

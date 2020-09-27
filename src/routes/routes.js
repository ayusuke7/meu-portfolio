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
    path: "/home",
    component: HomePage,
    isPrivate: true,
  },
  {
    exact: true,
    path: "/perfil/:username",
    component: PerfilPage,
    isPrivate: true,
  },
  {
    exact: true,
    path: "/portfolio/:username",
    component: PortfolioPage,
    isPrivate: true,
  },
  {
    exact: true,
    path: "/*",
    component: NotFound,
    isPrivate: true,
  },
];

export default routes;

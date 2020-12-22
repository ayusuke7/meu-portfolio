import { Router } from "express";

import authMiddleware from "./app/middlewares/AuthMiddleware";

import AuthController from "./app/controllers/AuthController";
import UserController from "./app/controllers/UserController";
import PortfolioController from "./app/controllers/PortfolioController";

const routes = Router();

/* Public Routes */
routes.post("/login", AuthController.autenticate);
routes.post("/register", AuthController.register);

routes.get("/user/:username", UserController.find);
routes.get("/portfolio/:username", PortfolioController.findByUser);

/* Private Routes */
routes.put("/user", authMiddleware, UserController.update);
routes.delete("/user", authMiddleware, UserController.delete);
routes.post("/portfolio", authMiddleware, PortfolioController.create);

export default routes;

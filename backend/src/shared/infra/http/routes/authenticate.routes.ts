import { Router } from "express";

import { AuthenticateUserController } from "@modules/auth/useCases/authenticateUser/AuthenticateUserController";
import { RegisterUserController } from "@modules/auth/useCases/registerUser/RegisterUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const registerUserController = new RegisterUserController();

authenticateRoutes.post("/register", registerUserController.handle);
authenticateRoutes.post("/login", authenticateUserController.handle);

export { authenticateRoutes };

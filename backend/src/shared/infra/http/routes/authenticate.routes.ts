import { Router } from "express";

import { AuthenticateUserController } from "@modules/auth/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/auth/useCases/refreshToken/RefreshTokenController";
import { RegisterUserController } from "@modules/auth/useCases/registerUser/RegisterUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();
const registerUserController = new RegisterUserController();

authenticateRoutes.post("/register", registerUserController.handle);
authenticateRoutes.post("/login", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticateRoutes };

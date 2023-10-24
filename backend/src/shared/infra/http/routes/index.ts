import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { passwordRoutes } from "./password.routes";
import { usersRoutes } from "./users.routes";
import { categoriesRoutes } from "./categories.routes";

const router = Router();

router.use("/", authenticateRoutes);
router.use("/category", categoriesRoutes);
router.use("/users", usersRoutes);
router.use("/password", passwordRoutes);

export { router };
